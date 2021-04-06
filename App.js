import React from 'react'
import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'
import { SensorComponent } from './components/SensorComponent'

import img from './assets/space.jpeg'

const Container = styled.View`
  flex: 1;
  background-image: url(${img})
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      <SensorComponent></SensorComponent>
    </Container>
  )
}

export default App
