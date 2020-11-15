import React from 'react'

import styled from 'styled-components/native'
import { Button, TouchableOpacity, Text, View } from 'react-native';
import { TouchBoxContainer } from './components/TouchBox'

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
  color: #000000;
`
const Paragraph = styled.Text`
  font-size: 16px;
  color: rgba(0,0,0,0.5);
`
const TextBox = styled.View`
border: 1px dashed white;
`;

const App = () => {

  return (
    <Container>
      <View>
        <Title>React React Game!</Title>
        <Paragraph>Press the box to start.</Paragraph>
      </View>
      <TouchBoxContainer></TouchBoxContainer>
    </Container>
  )
}

export default App
