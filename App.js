import React from "react"
import { View, Text} from "react-native"
//import styled from 'styled-components'
import StepCounter from "./components/StepCounter"

const App = () => {
  return (
    <View>
      <Text>Let's go for a walk!</Text>
      <StepCounter />
    </View>
  )
}

export default App
