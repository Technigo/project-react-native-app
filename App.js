import React from 'react'
import styled from 'styled-components/native'
import API from './components/API'

const Container = styled.View`
  flex: 1;
  background-color: red;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: white;
`

const App = () => {
  return (
    <Container>
      <API />
      <Title>This is your cool app!</Title>
      <Title>Go to App.js and start coding</Title>
      <Title>💅💅💅</Title>
    </Container>
  )
}

export default App
