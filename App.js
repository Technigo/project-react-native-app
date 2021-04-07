import React from 'react'
import styled from 'styled-components/native'
import { SensorImagePicker } from './components/SensorImagePicker'
import { Text, Image, SafeAreaView  } from 'react-native';



const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: white;
`
// Sharing.isAvailableAsync()
// Sharing.shareAsync(url, options)

const App = () => {
  return (
    <Container>
      <Title>Pop it Up</Title>
      <Title>Shake me to get the poping started!</Title>
      <SensorImagePicker />
    </Container>
  )
}

export default App
