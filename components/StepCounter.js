import React, { useState, useEffect } from "react"
import styled from 'styled-components/native'
import { Text, View } from "react-native"
import { Pedometer } from "expo-sensors"


const Title = styled.Text`
  font-size: 24px;
  padding: 14px;
  color: black;
`
const Container = styled.View`
  background-color: #F8EFBA;
`

const StepCounter = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0)

  useEffect(() => {
    Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps)
    })
  })

  return (
    <Container>
      <Title>Walk and watch this go up: {currentStepCount}</Title>
    </Container>
  )
}

export default StepCounter