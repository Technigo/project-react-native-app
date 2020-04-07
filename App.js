import React from 'react'
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import styled from 'styled-components/native'
import {Weather} from './components/Weather';
import {Compass} from './components/Compass';
import {Heading} from './components/Heading';
import MyLocation from './components/MyLocation';

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Container>
    <ScrollView contentContainerStyle = {styles.children} >
    <ImageBackground source={require('./assets/ForestBackground.jpg')} style={styles.image} >
     <Heading />
     <Compass />
    <Weather />
    <MyLocation />
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