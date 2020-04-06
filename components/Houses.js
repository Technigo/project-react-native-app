import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Detail } from './Detail'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const InterTitle = styled.Text`
  font-size: 14px;
`

export const Houses = () => {
  
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=qSlGOjPnCXc7pgWt5QcdsI3nw45FfocwP6EggaOZ')
      .then((res) => res.json())
      .then((json) => setImages(json))
  }, [])
  console.log('bild?',images.url)

  return (

    <Container>
      <Title>Space</Title>
      <Title>{images.date}</Title>

      <InterTitle>{images.explanation}</InterTitle>

    </Container>
  )
}
