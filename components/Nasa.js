import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native';
import { Rotate } from './Rotate';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 34px;
  color: palevioletred;
  font-weight: bold;
`

export const Nasa = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=qSlGOjPnCXc7pgWt5QcdsI3nw45FfocwP6EggaOZ')
      .then((res) => res.json())
      .then((json) => setImages(json))
  }, [])


  return (

    <Container>
      <Title>{images.title}</Title>
      <Image
        source={{ uri: images.url }}
        style={{ width: 300, height: 300, marginVertical: 5, }} />
      <Title>{images.date}</Title>
    </Container>
  )
}
