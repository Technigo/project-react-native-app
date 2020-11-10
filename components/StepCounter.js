import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { Pedometer } from "expo-sensors"

const Container = styled.View`
justify-content: center;
align-items: center;`


const Text = styled.Text`
  font-size: 18px;
  margin: 8px;
  color: #182C61;
  `

export const StepCounter = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0)

  useEffect(() => {
    Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps)
    })

  })

  return (
    <Container>
      <Text>Walk and watch this go up: {currentStepCount}</Text>
    </Container>
  )
}
