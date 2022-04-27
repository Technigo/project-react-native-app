import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"

import StepCounter from "./components/StepCounter"

const App = () => {
  return (
    <Container>
      <View>
        <StepCounter />
      </View>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: blueviolet;
  justify-content: center;
  align-items: center;
`

export default App
