import React from 'react'
import styled from 'styled-components/native'
// import { ImageBackground } from 'react-native'
import { SensorComponent } from './components/SensorComponent'

import background from './assets/space.jpeg'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const BackgroundIMage = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
`

const App = () => {
  return (
    <BackgroundIMage
      source={background}>
      <Container>
        <SensorComponent></SensorComponent>
      </Container>
    </BackgroundIMage>
  )
}

export default App
