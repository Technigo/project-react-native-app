import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import styled from 'styled-components/native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Some kinda text here</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
