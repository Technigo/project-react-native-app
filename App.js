import React from "react"
import styled from "styled-components/native"
import { ImageBackground } from "react-native"

import StepCounter from "./components/StepCounter"

const App = () => {
  return (
    <Container>
      <StepCounter />
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require("./assets/walking.jpg")}
      ></ImageBackground>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  text-align: center;
`

export default App
