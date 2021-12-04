import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Accelerometer } from 'expo-sensors'
import { View, Button, ActivityIndicator, Image } from 'react-native'
import LottieView from 'lottie-react-native'

import { POKEMON_URL } from '../utils/urls'
import { PokemonCardModal } from './PokemonCardModal'
import { pokemonShake } from '../reducers/pokemonShake'

const ShakeFetch = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0
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
      })
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
        console.log(pokemon)
        setPokemon(pokemon)
        dispatch(pokemonShake.actions.setCurrent(pokemon))
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      )
  }

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
  }

  if (loading) {
    return <ActivityIndicator />
    // return (
    //   <LottieView
    //     source={require('../animations/loading.json')}
    //     style={{
    //       width: 100,
    //       height: 100
    //     }}
    //     autoPlay
    //   />
    // )
  }

  // const { x, y, z } = data

  // <Text>Data x: {x}</Text>
  // <Text>Data y: {y}</Text>
  // <Text>Data z: {z}</Text>

  return (
    <View>
      {!pokemon.name && (
        <>
          <Image
            source={require('../assets/pokeshake_logo.png')}
            style={{ width: 200, height: 150 }}
          />
          <Button title="Click!" onPress={generatePokemon} />
        </>
      )}
      {pokemon.name && (
        <>
          <PokemonCardModal />
        </>
      )}
    </View>
  )
}
export default ShakeFetch
