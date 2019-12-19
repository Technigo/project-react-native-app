import React from 'react'
import styled from "styled-components/native"
import Header from './Components/Header'
import Counter from './Components/Counter'
// import { Button } from './Components/Button'


export const App = () => {

  console.log('Deubuggiiiing!?')

  return (
    < Container >
      <Header title="Hello" />
      <Counter />
      <Title>This is my cool app!</Title>
      <Title>💅💅💅</Title>
      <Header title="Bye bye" />
    </Container >
  )
}

const Container = styled.View`
  flex: 1;
  background-color: powderblue;
  align-items: center;
  justify-content: space-around;
  paddingTop: 60;
`

const Title = styled.Text`
  font-size: 42px;
  color: palevioletred;
`

const Push = styled.Button`
color: palevioletred;
font-size: 32px;
`

export default App
