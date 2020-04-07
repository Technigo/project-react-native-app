import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { Detail } from './Detail'

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
        style={{ width: 200, height: 300, marginVertical: 5, }} />
     
      <Date>{images.date}</Date>
      <Detail></Detail>
      <Title>{images.explanation}</Title>
    </Container>
  )
}

const Container = styled.View`
  background-color: #ffe8ea;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  flex: 2;
  flex-wrap: wrap;
  font-size: 12px;
  color: palevioletred;
  font-weight: bold;
  paddingHorizontal: 50;
  paddingVertical: 50;
`

const Date = styled.Text`
  flex: 1;
  font-size: 12px;
  color: violet;
`
