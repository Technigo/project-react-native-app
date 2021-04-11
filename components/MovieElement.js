import React from 'react'
import styled from 'styled-components/native'
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MOVIE_BACKDROP } from '../reusables/API_URL'

const MovieElement = ({ poster_path, id }) => { 
  const navigation = useNavigation()

  return (
    <Movie>
      <Pressable onPress={() => navigation.navigate('MovieDetails', { id })}>
        <PosterImageElement source={{ uri: MOVIE_BACKDROP(poster_path) }} />
      </Pressable>
    </Movie>
  )
}

const Movie = styled.View`
  padding: 12px;
  width: 100%;
  position: relative;
  text-decoration: none;
  flex-flow: row;
  `

const PosterImageElement = styled.Image`
  width: 200px;
  height: 300px;
  margin: 0 auto;
`

const Heading = styled.Text`
  width: 100%;
  margin-top: 12px;
  font-size: 24px;
`

const Paragraph = styled.Text`
  font-size: 16px;
`

export default MovieElement
