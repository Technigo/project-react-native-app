import React from 'react'
import NewsList from './components/NewsList'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: white;
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
      <NewsList />
      <Title>This is your very cool app!</Title>
      <Title>Go to App.js and start coding!</Title>
      <Title>💅💅💅</Title>
    </Container>
  )
}

export default App
