import React from 'react'

import { Alfabet } from './Letter.js'
import styled from 'styled-components/native'


const App = () => {

return (
  <Container>
    <Alfabet />
      <Title>ABC</Title>
      <Title>💅💅💅</Title>
    </Container>
);
}

export default App

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