import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Accelerometer } from 'expo-sensors'
import { StyleSheet, View, Button, Image, ImageBackground } from 'react-native'
import LottieView from 'lottie-react-native'

import { POKEMON_URL } from '../utils/urls'
import { PokemonCardModal } from '../components/PokemonCardModal'
import { pokemonShake } from '../reducers/pokemonShake'

const ShakeFetch = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [subscription, setSubscription] = useState(null)
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    generatePokemon
  }, [])

  useEffect(() => {
    Accelerometer.setUpdateInterval(500)
    subscribe()
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (isShakingEnough(data)) {
      generatePokemon()
    }
  }, [data])

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData)
      }),
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  const randomNumber = () => {
    if (pokemon.id >= 251) {
      return Math.round(Math.random() * 151)
    } else if (pokemon.id <= 30) {
      return Math.round(Math.random() * 898)
    } else {
      return Math.round(Math.random() * 251)
    }
  }

  const generatePokemon = () => {
    const pokemonNumber = randomNumber()
    setLoading(true)
    fetch(POKEMON_URL(pokemonNumber))
      .then((res) => res.json())
      .then((pokemon) => {
        setPokemon(pokemon)
        dispatch(pokemonShake.actions.setCurrent(pokemon))
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false)
        }, 2000),
      )
  }

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 2
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/sunburst.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <LottieView
            source={require('../animations/loading.json')}
            style={{
              width: 300,
              height: 300,
            }}
            autoPlay
          />
        </ImageBackground>
      </View>
    )
  }

  // const { x, y, z } = data

  // <Text>Data x: {x}</Text>
  // <Text>Data y: {y}</Text>
  // <Text>Data z: {z}</Text>

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/sunburst.jpg')}
        resizeMode="cover"
        style={styles.image}>
        {!pokemon.name && (
          <>
            <Image
              source={require('../assets/pokeshake_logo.png')}
              style={{ width: 200, height: 150 }}
            />
            <Button title="Click!" onPress={generatePokemon} />
          </>
        )}

        {pokemon.name && <PokemonCardModal />}
      </ImageBackground>
    </View>
  )
}
export default ShakeFetch

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
