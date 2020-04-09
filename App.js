import React from 'react'
import styled from 'styled-components/native'
import { Workouts } from './Components/Workouts'
import { PeppTalk } from './Components/PeppTalk'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 40px;
  color: #466687;
  margin: 20px;
  text-align: center;
`

const App = () => {
  return (
    <Container>
      <PeppTalk />
      <Title>Todays workout</Title>
      <Workouts />
    </Container>
  )
}

export default App
