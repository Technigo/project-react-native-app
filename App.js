import React from 'react'
import styled from 'styled-components/native'
import { Button, TouchableOpacity, Text, View } from 'react-native';
import {TouchBoxContainer } from './components/TouchBox'

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  border: 1px dashed green;
  padding-top: 80px;
  justify-content: space-between;
`
const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const Paragraph = styled.Text`
  font-size: 16px;
  color: rgba(0,0,0,0.5);
`


const TextBox = styled.View`
border: 1px dashed white;
`;




const App = () => {

  const pressButton = () => {
    alert("Button pressed")
  }



  return (
    <Container>
      <View>
        <Title>React React Game!</Title>
        <Paragraph>Go to App.js and start coding</Paragraph>
      </View>
      <TouchBoxContainer></TouchBoxContainer>
      {/* <TouchBox onPress={calculateRandomTimer}>
        <View>
          <BoxText>Hej</BoxText>
        </View>
      </TouchBox> */}
    </Container>
  )
}

export default App
