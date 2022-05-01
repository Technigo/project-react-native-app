import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import ShakeApi from './components/ShakeApi'
import Header from './components/Header'

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      <Header></Header>
      <ShakeApi></ShakeApi>
    </Container>
  )
}

export default App
