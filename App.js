import React, { useState } from 'react'
import styled from 'styled-components/native'
import background from './assets/background.jpg'


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

const RandomDogButton = styled.TouchableOpacity`
  background-color: pink;
  border-radius: 50px;
  padding: 10px; 
`
const ButtonText = styled.Text`
  font-size: 20px;
`

const App = () => {
  
  return (
    <Container source={background}>
      <Title>Click the button to get a picture of a cute dog to share with a friend</Title>
      <RandomDogButton onPress=''>
        <ButtonText>Get a cute dog</ButtonText>
      </RandomDogButton>
    </Container>
  )
}

export default App
