import React from 'react'
import styled from 'styled-components/native'

import background from './assets/space.jpeg'
import { SensorComponent } from './components/SensorComponent'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
`

const App = () => {
  return (
    <BackgroundImage
      source={background}>
      <Container>
        <SensorComponent />
      </Container>
    </BackgroundImage>
  )
}

export default App
