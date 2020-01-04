import React, { useState } from "react"
import { Animated } from "react-native"
import styled from "styled-components"
import EightBallAnswers from "./EightBallAnswers"

const App = () => {
  const [viewOne, setViewOne] = useState(false)
  const [shake, setShake] = useState(false)
  const animatedValue = new Animated.Value(0)

  const shakeEightBall = () => {
    setShake(true)
    setTimeout(() => setViewOne(!viewOne), 2000)
  }

  const reset = () => {
    setShake(false)
    setViewOne(!viewOne)
  }

  if (viewOne) {
    return (
      <Container onStartShouldSetResponder={() => reset()}>
        <Title>
          {EightBallAnswers[Math.floor(Math.random() * EightBallAnswers.length)]}
        </Title>
      </Container>
    );
  }

  return (
    <Container>
      <Eightball onStartShouldSetResponder={() => shakeEightBall()}>
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
  background-color: red;
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
