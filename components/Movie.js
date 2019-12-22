import React, { useState } from "react"
import styled from "styled-components/native"
import Animation from "./Animation"

const Container = styled.View`
flex: 0.6;
width: 100%;
height: 100%;
align-items: center;
`
const Button = styled.TouchableOpacity`
margin: 10px;
background-color: ${props => props.red ? "red" : "yellow"};
font-size: 30;
`

const Text = styled.Text`
color: #000;
font-size: 30;
`
const Image = styled.ImageBackground`
width: 90%;
height: 100%;
`

export const Movie = ({ movie }) => (

  <Container>
    <Animation />
    <Image resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
  </Container>
)