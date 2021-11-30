import React from 'react'
import styled from 'styled-components/native'
import API from './components/API'
import Header from './components/Header'

const Container = styled.View`
  flex: 1;
  background-color: red;
  justify-content: center;
  align-items: center;
  padding: 7%;
  justify-content: space-evenly;
  border: 5px solid black;
`

const Title = styled.Text`
  font-size: 50px;
  color: white;
  text-align: center;
`

const App = () => {
  return (
    <Container>
      <Header />
      <API />
      <Title>Shake to see the weather somewhere</Title>
    </Container>
  )
}

export default App
