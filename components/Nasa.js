import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'

export const Nasa = ( { navigation } ) => {
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
          style={{ width: 500, height: 200, marginVertical: 2 }} />

        <Date>{images.date}</Date>
        <TouchableOpacity 
        key={images.title}
        onPress={() => navigation.navigate('Detail')}><Title>Read more</Title>
        </TouchableOpacity>
        
      </Container>
        )
  }


const Container = styled.View`
  flex:1;
  background-color: #222;
  justify-content: center;
  align-items: center;
  paddingHorizontal: 10;
  paddingVertical: 10;
`

const Title = styled.Text`
  font-size: 20px;
  color: palevioletred;
  font-weight: bold;
  paddingHorizontal: 30;
  paddingVertical: 30;
`

const Date = styled.Text`
  font-size: 24px;
  color: violet;
  paddingHorizontal: 0;
  paddingVertical: 0;
`
