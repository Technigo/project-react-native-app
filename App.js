import React from 'react'
import styled from 'styled-components/native'
import { ThingsToDo } from './components/ThingsToDo'

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
      {/* <Title>This is your cool app!</Title>
      <Title>Go to App.js and start coding</Title> */}
      <Title>Vad ska vi göra idag Nathaniel?</Title>
      <ThingsToDo />

    </Container>
  )
}

export default App
