import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
// import styled from 'styled-components/native'
import ApiFetch from './components/ApiFetch'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A clever quote on your coding journey</Text>
      <ApiFetch />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: 'palevioletred',
    margin: 80
  }
})

export default App
