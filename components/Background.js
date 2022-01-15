import React from 'react'
import { StyleSheet, ImageBackground, Image, View } from 'react-native'
import styled from 'styled-components/native'

export const Background = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/sunburst.jpg')}
        resizeMode="cover"
        style={styles.image}
      />
    </View>

    // <StyledImage />
  )
}

// const StyledImage = styled.Image`
//   background-image: url('../assets/sunburst.jpg');
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: bottom;
//   /* height: 100vh; */
//   position: absolute;
// `

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
