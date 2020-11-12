import React, { useState } from 'react'
import styled from 'styled-components/native'
import background from './assets/background.jpg'
import RandomDog from './components/RandomDog'


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

const BottomText = styled.Text`
font-size: 32px;
`

const App = () => {
  const [count, setCount] = useState(0)
  const onPress = () => {
    setCount(count + 1)
  }
  
  return (
    <Container source={background}>
      <Title>Click the button to get a picture of a cute dog to share with a friend.</Title>
      <RandomDogButton onPress={onPress}>
        <ButtonText>Get a cute dog</ButtonText>
      </RandomDogButton>
   {/*    <RandomDog /> */}
      <BottomText>{count}</BottomText>
    </Container>
  )
}

export default App
