import React from 'react'
import styled from 'styled-components/native'

import { SensorImagePicker } from './components/SensorImagePicker'
import { Footer } from './components/Footer'


const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 50px;
  color: white;
  padding-top: 50px;
  text-align: center
`
const InfoText = styled.Text`
  font-size: 24px;
  color: white;
  padding-top: 50px;
  padding-bottom: 100px;
  text-align: center;
`
// Sharing.isAvailableAsync()
// Sharing.shareAsync(url, options)

const App = () => {
  return (
    <Container>
      <Title>PopUp Popcorn Gallery!</Title>
      <InfoText>Shake me to get the popping started!</InfoText>
      <SensorImagePicker />
      <Footer />
    </Container>
  )
}

export default App
