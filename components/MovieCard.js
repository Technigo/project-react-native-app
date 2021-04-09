import React from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import styled from 'styled-components/native'

const CardContainer = styled.View`
  padding-bottom: 20px;
`
const MovieImage = styled.Image`
height: 240px;
width: 170px;
`

export const MovieCard = ({ title, poster_path, overview, vote_average }) => {

  const onPressCard = () => {

    Alert.alert(
      `${title}`,
      `${overview}

      ${vote_average} / 10`,
      [
        { text: "Back to movies"},
      ]
    );
  }

  return (
    <>
    <TouchableOpacity onPress={onPressCard}>
      <CardContainer>
        <MovieImage source={{uri: `https://image.tmdb.org/t/p/w342${poster_path}`}} />
      </CardContainer>
    </TouchableOpacity>
    </>
  )

}

export default MovieCard