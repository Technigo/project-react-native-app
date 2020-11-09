import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Button } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'


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

const IntroText = styled.Text`
max-width: 500px;
text-align: center;
padding-top:30px;
`




const TopContainer = styled.View`
  flex:1; 
  width: 100%;
  background-color: papayawhip;
`


const BottomContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;

`

const App = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count +1 )
    console.log("incremented");
  } 



  return (
    <Container>
      <TopContainer>
      </TopContainer>
      <Title>DAILY EMPOWERMENT CHALLENGES</Title>
      <IntroText>
        Inspired by the book: 
        "Nice girls don't get the corner office" 
      </IntroText>       
    <MainContainer>
    <TouchableOpacity onPress={onIncrement}>
          <Text>Add +1</Text>
        </TouchableOpacity>
        <Text>Total: {count}</Text>
    </MainContainer>


      <BottomContainer>
     
      </BottomContainer>
    </Container>
  )
}

export default App
