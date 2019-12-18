import React from "react"
import styled from "styled-components/native"
// import { Button } from './Components/Button'


export const App = () => {
  return (
    < Container >
      <Button title="KLICKA" />
      <Title>This is your cool app!</Title>
      <Title>Go to App.js and start coding</Title>
      <Title>💅💅💅</Title>
    </Container >
  )
}

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

const Button = styled.Button`
background-color: palevioletred;
color: white;
padding: 8px 16px;
margin: 12px;
border-radius: 8px;
font-size: 32px;
`

export default App
