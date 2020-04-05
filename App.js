import React from 'react'
import styled from 'styled-components/native'
import { Workouts } from './Components/workouts'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
  return (
    <Container>
      <Title>Hallå älskling</Title>
      <Title>Vad ska jag göra för app?</Title>
      <Title>🥭</Title>

      <Workouts />

    </Container>
  )
}

export default App
