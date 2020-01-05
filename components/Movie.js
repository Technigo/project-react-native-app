import React from 'react'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`

const Image = styled.ImageBackground`
  height: 100%;
  width: 90%;
`

export const Movie = ({ movie }) => (
  <Container>
    <Image resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
  </Container>
)
