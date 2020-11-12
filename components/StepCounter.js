import React, { useState, useEffect } from "react"
import { Pedometer } from "expo-sensors"
import styled from "styled-components/native"


const Text = styled.Text`
  font-size: 18px;
  margin: 8px;
  color: #F4F4F4;
  `

export const StepCounter = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0)

  useEffect(() => {
    Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps)
    })

  })

  return (
    <Text>{currentStepCount}</Text>
  )
}