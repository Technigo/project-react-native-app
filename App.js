import React from "react"
import styled from "styled-components/native"
import StepCounter from "./components/StepCounter"
import Animation from "./components/Animation"

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: flex-end;
  align-items: center;
`

const Section = styled.View`
 margin-bottom: 28px; 
`

const Title = styled.Text`
  margin-bottom: 28px;  
  font-size: 34px;
  font-weight: bold;
  color: #182C61;
`

const App = () => {
  return (
    <Container>
      <Section>
        <Title>Let's go for a walk!</Title>
        <StepCounter />
      </Section>
      <Animation />
    </Container>
  )
}

export default App
