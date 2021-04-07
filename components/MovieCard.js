import React from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import styled from 'styled-components/native'
import * as Sharing from 'expo-sharing';

//Styled components

const CardContainer = styled.View`
  padding-bottom: 20px;
`
const MovieImage = styled.Image`
height: 220px;
width: 150px;
`

//

const MovieCard = ({ title, poster_path, overview }) => {

  const onPressCard = () => {
    Alert.alert(
      `${title}`,
      `${overview}`,
      [
        { text: "Back to movies"}
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