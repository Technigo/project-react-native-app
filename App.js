import React from "react"
import styled from "styled-components/native"

import Animation from "./components/Animation"
import DoggoStepCounter from "./components/DoggoStepCounter"

const Container = styled.View`
  flex: 1;
  background-color: #3491cd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`

const Section = styled.View`
 width: 400px;
 height: 500px;
`

const Title = styled.Text`
  font-size: 28px;
  color: #fff;
  margin: 50px;
  padding-top: 100px;
  text-align: center;
  font-family: montserrat;
`

const App = () => {
  return (
    <Container>
      <Section>
        <Title> Quarantine doggo step counter: maximum 20.000steps in one day for a dog - do not use them just escape from your appartment!</Title>
        <DoggoStepCounter/>
      </Section>
        <Animation/>
    </Container>
  )
}

export default App