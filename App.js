import React from 'react'
import styled from 'styled-components/native'
import { Touchable } from './components/Touchable'

const StyledView = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 25px;
  color: palevioletred;
`

const App = () => {
  return (
    <StyledView>
      <Touchable />
      <Title>This is your cooler app!</Title>
      <Title>💅💅💅</Title>
    </StyledView>
  )
}

export default App

  
