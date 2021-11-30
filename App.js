import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { ShakeAPI } from './components/ShakeAPI'

const Container = styled.View`
  flex: 1;
  background-color: #fff3b0;
  justify-content: center;
  align-items: center;
`

const HeaderTitle = styled.Text`
  position: absolute;
  top: 90;
  color: #eedf8b;
  text-shadow: 3px 3px #e09f3e;
  font-size: 35px;
  font-weight: 800;
`
const HeaderSpan = styled.Text`
  font-size: 25;
  color: #444644;
`

const App = () => {
  return (
    <Container>
      <HeaderTitle>
        Shake<HeaderSpan>to</HeaderSpan>Make
      </HeaderTitle>
      <ShakeAPI />
    </Container>
  )
}

export default App
