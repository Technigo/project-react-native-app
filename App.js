import React from 'react'
import styled from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons';

import { View } from 'react-native';


import { StyledButton } from './components/Button';

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


const App = () => {
  return (
    //like a section
    <Container>
      <Title>Electrified Map</Title>
      <Fontisto name="car" size={50} color="black" />
      <Button>Enter</Button>
    </Container>
  )
}

export default App
