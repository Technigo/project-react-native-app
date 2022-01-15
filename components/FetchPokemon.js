import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { useDispatch, useSelector } from 'react-redux'

import { View, Text, Button, Image, ActivityIndicator } from 'react-native'
import { POKEMON_URL } from '../utils/urls'
import { PokemonCardModal } from './PokemonCardModal'
import { pokemonShake } from '../reducers/pokemonShake'

// import { LoadingIndicator } from './LoadingIndicator'

const FetchPokemon = () => {
  const dispatch = useDispatch()
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    generatePokemon
  }, [])

  const randomNumber = () => {
    if (pokemon.id >= 251) {
      return Math.round(Math.random() * 251)
    } else if (pokemon.id <= 151) {
      return Math.round(Math.random() * 493)
    } else {
      return Math.round(Math.random() * 898)
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
        // setImgUrl(pokemon.sprites.other['official-artwork'].front_default) // Compensating for a mistake in the backend ('-' instead of '_')
        // setTypes(pokemon.types.map((type) => type.type.name))
        // setAbilities(pokemon.abilities.map((ability) => ability.ability.name))
        dispatch(pokemonShake.actions.setCurrent(pokemon))
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false)
        }, 500),
      )
  }

  if (loading) {
    return <ActivityIndicator />
    // return <LoadingIndicator />
  }

  return (
    <View>
      {/* {loading && <LoadingIndicator />} */}
      <Text>Fetch a pokemon!</Text>
      <Button title="Click!" onPress={generatePokemon} />
      {pokemon.name && (
        <>
          <PokemonCardModal />
          {/* <PokemonCardModal
            name={pokemon.name}
            height={pokemon.height}
            weight={pokemon.weight}
            types={types}
            abilities={abilities}
          /> */}
          {/* <Text>{pokemon.name}</Text>
          <Text>
            id: {pokemon.id} | {pokemon.name} is {pokemon.height * 10} cm high
            and weighs {pokemon.weight / 10} kg.
          </Text>
          {types.length > 1 && (
            <Text>
              Type: {types[0]} and {types[1]}
            </Text>
          )}
          {types.length === 1 && <Text>Type: {types[0]}</Text>}
          <Text>
            Abilities: {abilities[0]} {abilities[1]} {abilities[2]}
          </Text>
          <Image source={imgUrl} style={{ width: 200, height: 200 }} /> */}
        </>
      )}
    </View>
  )
}
export default FetchPokemon
