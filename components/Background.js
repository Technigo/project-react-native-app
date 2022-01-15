import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import styled from 'styled-components/native'

export const Background = () => {
  return (
    <ImageBackground
      source={require('../assets/sunburst.jpg')}
      resizeMode="cover"
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
