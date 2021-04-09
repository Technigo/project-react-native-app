import React from 'react'
import styled from 'styled-components/native'

import { SensorImagePicker } from './components/SensorImagePicker'
import { Footer } from './components/Footer'


const Container = styled.View`
  flex: 1;
  background-color: #ECF1EB;
  justify-content: center;
  align-items: center;
`

const TopText = styled.Text`
  font-size: 30px;
  color: #505250;
  padding-top: 70px;
  text-align: center;
  `
  
const Title = styled.Text`
  font-size: 50px;
  color: #505250;
  text-align: center
`
const InfoText = styled.Text`
  font-size: 22px;
  color: #505250;
  padding-top: 40px;
  padding-bottom: 100px;
  text-align: center;
`

const App = () => {
  return (
    <Container>
      <TopText>The</TopText>
      <Title>PopUp Popcorn Gallery</Title>
      <InfoText>Shake me to enter the exhibition!</InfoText>
      <SensorImagePicker />
      <Footer />
    </Container>
  )
}

export default App
