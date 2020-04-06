import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import styled from 'styled-components/native'
import {Weather} from './components/Weather';
import { Compass } from './components/Compass';
import {Heading} from './components/Heading';

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

const App = () => {
  return (
    <Container>
    <ScrollView contentContainerStyle = {styles.children} >
    <ImageBackground source={require('./assets/ForestBackground.jpg')} >
     <Heading />
     <Compass />
    <Weather />
  </ImageBackground>
  </ScrollView>
  </Container>
  )
}

export default App

const styles = StyleSheet.create({

  children: {
    height: 1000,
    width: 400,
    flexGrow: 1,
    justifyContent: 'center',

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
  },
});