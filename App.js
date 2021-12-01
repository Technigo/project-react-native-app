import React from 'react'
import styled from 'styled-components/native'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { ShakeAPI } from './components/ShakeAPI'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'

const image = { uri: 'https://i.imgur.com/9j8yIOX.jpg' }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff3b0',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <HomePage />
      </ImageBackground>
    </View>
  )
}

export default App
