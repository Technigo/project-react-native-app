import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  /* flex: 1; */
  background-color: #fff;
  justify-content: center;
  align-items: center;
`

export const Map = () => {
  return (
    <Container>
      <MapView style={styles.map} />
    </Container>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: 400,
  },
})
