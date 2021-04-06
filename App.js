import React from 'react'
import styled from 'styled-components/native'
import { SensorImagePicker } from './components/SensorImagePicker'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
// Sharing.isAvailableAsync()
// Sharing.shareAsync(url, options)

const App = () => {
  return (
    <Container>
      <Title>Pop it Up</Title>
      <Title>Shake me to get the poping started!</Title>
      <SensorImagePicker></SensorImagePicker>
    </Container>
  )
}

export default App
