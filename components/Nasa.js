import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Detail } from './Detail'
import { 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Image, 
  FlatList,
  View, 
  ScrollView,
  TouchableHighlight, } from 'react-native'
import Constants from 'expo-constants'

export const Nasa = () => {
  const [images, setImages] = useState([])
  const [modalVisible, setModalVisible] = useState(false);

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
          style={{ width: 500, height: 200, marginVertical: 2}} />

        <Date>{images.date}</Date>
        <Title>{images.explanation}</Title>
        <Detail></Detail>
      </Container>
    )
}

const Container = styled.View`
  flex:1;
  background-color: #ffe8ea;
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
