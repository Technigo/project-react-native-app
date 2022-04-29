import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import ShakeApi from './components/ShakeApi'

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #f8eded;
  padding: 8px;
  position: relative;
  min-height: 100%;
`

const App = () => {
  return (
    <Container>
      <ShakeApi />
    </Container>
  )
}

export default App
