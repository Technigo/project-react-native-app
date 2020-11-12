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
  font-size: 30px;
  color: black;
  margin: 20px;
  text-align: center;
`

const App = () => {
  return (
    <Container>
      <Title>Vad ska vi göra idag Nathaniel?</Title>
      <ThingsToDo />
    </Container>
  )
}

export default App
