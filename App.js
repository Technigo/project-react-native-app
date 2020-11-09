import React from 'react'
import styled from 'styled-components/native'
import { StartScreen } from './Components/StartScreen'

const Container = styled.View`
  flex: 1;
  background-color: #01044d;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      <StartScreen/>
    </Container>
  )
}

export default App
