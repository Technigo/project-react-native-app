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
  color: white;
  font-size: 14px;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0.6;
  width: 100%;
`

export default StepCounter
