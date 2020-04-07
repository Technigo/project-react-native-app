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
  margin-bottom: 28px;  
  font-size: 32px;
  font-weight: bold;
  color: #182C61;
`

const App = () => {
  return (
    <Container>
      <Title>🏃‍♀️Let's go for a walk! 🏃‍♂</Title>
      <StepCounter />
    </Container>
  )
}

export default App
