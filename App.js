import React from 'react'
import styled from 'styled-components/native'
import { SensorComponent } from './components/SensorComponent'


const MainContainer = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
  width:100%;
`
const TopContainer = styled.View`
flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  border: 3px solid yellow;

`
const JokeContainer = styled.View`
flex: 3;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  border: 3px solid yellow;
  width:100%;
`


const Title = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: red;
  border: 3px solid black;
  width:100%;
`

const App = () => {

  
  return (
    <MainContainer>
      <TopContainer><Title>JOKE GENERATOR</Title></TopContainer>
      <JokeContainer><SensorComponent /></JokeContainer>
    </MainContainer>
  )
}

export default App
