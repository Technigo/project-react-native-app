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
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin: 30px;
`

const App = () => {
  
  return (
    <Container source={background}>
      <Title>Dog Randomizer</Title>  
    <RandomDog />
    </Container>
  )
}

export default App
