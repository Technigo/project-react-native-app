import React from 'react'
import { ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import { SensorComponent } from './components/SensorComponent'

import Pug from './assets/Pug.jpg'

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      <ImageBackground
        source={Pug}
        style={{ width: 425, height: 700 }}
        resizeMode='cover'
      >
        <SensorComponent></SensorComponent>
      </ImageBackground>
    </Container>
  )
}

export default App
