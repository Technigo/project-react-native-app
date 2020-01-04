import React, { useState } from "react"
import styled from "styled-components/native"

const App = () => {
  const [viewOne, setViewOne] = useState(false);

  if (viewOne) {
    return (
      <Container onStartShouldSetResponder={() => setViewOne(!viewOne)}>
        <Title>viewOne</Title>
      </Container>

    );
  }
  return (
    <Container>
      <Eightball onStartShouldSetResponder={() => setViewOne(!viewOne)}>
        <EightballContent>
          <EightballText>8</EightballText>
        </EightballContent>
      </Eightball>
      <Title>Ask a question and press the eight ball to get your answer.</Title>
    </Container>
  )
}

const Button = styled.Button`

`
const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const Eightball = styled.View`
width: 200;
height: 200;
border: 55px black solid;
border-radius: 100;
margin-bottom: 35px;
`
const EightballContent = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`
const EightballText = styled.Text`
font-size: 42px;
font-weight: 700;
`

const Title = styled.Text`
width: 200px;
text-align: center;
  font-size: 24px;
  color: black;
`

export default App
