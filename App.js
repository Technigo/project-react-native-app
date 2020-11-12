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
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 10px;
`

const App = () => {
  
  return (
    <Container source={background}>
      <Title>Click the button to get a picture of a cute dog to share with a friend.</Title>  
    <RandomDog />
    </Container>
  )
}

export default App
