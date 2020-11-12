import React, { useState } from 'react'
import styled from 'styled-components/native'
import background from './assets/background.jpg'
import { RandomDog } from './components/RandomDog'


const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: black;
  margin: 20px;
`

const App = () => {
  
  return (
    <Container source={background}>
      <Title>Infinite dog randomizer</Title>  
    <RandomDog />
    </Container>
  )
}

export default App
