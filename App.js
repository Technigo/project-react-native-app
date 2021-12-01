import React from "react"
import styled from "styled-components/native"

import Data from "./components/Data"

const Container = styled.View`
  flex: 1;
  background-color: #d9cab3;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: #212121;
  margin-bottom: 20px;
`

const App = () => {
  return (
    <Container>
      <Title>Who is this Pokemon?</Title>
      <Data />
    </Container>
  )
}

export default App
