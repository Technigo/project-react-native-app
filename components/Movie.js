import React from "react"
import styled from "styled-components/native"

const Container = styled.SafeAreaView`
flex: 1;
width: 100%;
height: 100%;
align-items: center;
`
const Text = styled.Text`
top: 900;
color: #fff;
font-size: 30;
`
const Image = styled.ImageBackground`
width: 90%;
height: 100%;
`

export const Movie = ({ movie }) => (
  <Container>
    <Text>{movie.title}</Text>
    <Image resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />

  </Container>
)