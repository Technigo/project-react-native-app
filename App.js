import React from 'react'
import styled from 'styled-components/native'

import { Header } from './components/Header'
import { SensorComponent } from './components/SensorComponent'
import { Footer } from './components/Footer'

const Container = styled.View`
  flex: 1;
  background-color: #4a60e3;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      <Header />
      <SensorComponent></SensorComponent>
      <Footer />
    </Container>
  )
}

export default App
