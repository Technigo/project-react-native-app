import React from 'react'
import styled from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient'
import { ShakeSensor } from './components/ShakeSensor'
//import { ShakeSensor2 } from './components/ShakeSensor2'

const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #0a0a0a;
`
// Could not make a linear background color without using inline syntax, got only errors
const App = () => {
  return (
    <Container>
      <LinearGradient 
        colors={["#d16ba5", "#c777b9", "#ba83ca", "#aa8fd8", "#9a9ae1", "#8aa7ec", "#79b3f4", "#69bff8", "#52cffe", "#41dfff", "#46eefa", "#5ffbf1"]}
        style={{flex: 1}}
      >
        <ShakeSensor></ShakeSensor>
      </LinearGradient>
    </Container>
  )
}

export default App
