import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { Pedometer } from "expo-sensors"
import { View } from "react-native"

const StepCounter = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0)

  useEffect(() => {
    Pedometer.watchStepCount((result) => {
      setCurrentStepCount(result.steps)
    })
  })

  return (
    <View>
      <Text>I have taken: {currentStepCount} steps today!</Text>
    </View>
  )
}

const Text = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0.6;
  margin-top: 80%;
  text-align: center;
`

export default StepCounter
