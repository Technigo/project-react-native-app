import React from 'react'
import styled from 'styled-components/native'
import StepCounter from "./components/StepCounter"

const Container = styled.View`
  flex: 1;
  background-color: #F8EFBA;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: black;
`

const App = () => {
  return (
    <Container>
      <Title>Let's go for a walk!</Title>
      <StepCounter />
    </Container>
  )
}

export default App
