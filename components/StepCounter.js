import React, { useState, useEffect } from "react"
//import styled from "styled-components/native"
import { Pedometer } from "expo-sensors"
import { View, Text} from "react-native"




const StepCounter = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0)
  

  

  useEffect(() => {
    Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps)
    })
  })

  return (
    <View>
      <Text>Walk and watch this go up: {currentStepCount}</Text>
    </View>
  )
}

export default StepCounter