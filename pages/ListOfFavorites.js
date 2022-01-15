import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Pressable, Text, View, Image } from 'react-native'
import styled from 'styled-components/native'

import { pokemonShake } from '../reducers/pokemonShake'

export const ListOfFavorites = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((store) => store.pokemonShake.favorites)

  return (
    <Wrapper>
      <Text>My PokéFriends! ({favorites.length} / 6)</Text>
      {!favorites.length && (
        <Wrapper>
          <Text>No PokéFriends added yet!</Text>
        </Wrapper>
      )}
      <PokeWrapper>
        {favorites.map((pokemon) => (
          <Card key={pokemon.id}>
            <Image
              source={{
                uri: `${pokemon.sprites.other['official-artwork'].front_default}`,
              }}
              style={{ width: 150, height: 150 }}
            />
            <Text>
              <Text>{pokemon.name}</Text>
              <Text> #{pokemon.id}</Text>
            </Text>

            <Text>
              <Text>{pokemon.types[0].type.name}</Text>
              {pokemon.types.length === 2 && (
                <Text> & {pokemon.types[1].type.name}</Text>
              )}
            </Text>

            <Pressable
              onPress={() =>
                dispatch(pokemonShake.actions.removeFavorite(pokemon))
              }>
              <Text>Remove</Text>
            </Pressable>
          </Card>
        ))}
      </PokeWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  text-align: center;
`
const PokeWrapper = styled.View`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`
const Card = styled.View`
  width: 48%;
  margin-bottom: 10px;
`
