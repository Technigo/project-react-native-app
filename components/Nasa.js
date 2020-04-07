import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { Detail } from './Detail'
import { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet } from "react-native";

function Separator() {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

const Container = styled.View`
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 12px;
  color: palevioletred;
  font-weight: bold;
  paddingHorizontal: 50;
  paddingVertical: 50;
`

export const Nasa = () => {
  const ONE_SECOND_IN_MS = 1000;
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
      <Detail></Detail>
      <Title>{images.explanation}</Title>
      <View>
        <Button title="Test" onPress={() => Vibration.vibrate()} />
      </View>
    </Container>
  )
}

