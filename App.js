import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { DogsList } from './components/DogsList'

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
      <Title>Dogs!</Title>
      <DogsList />
    </Container>
  )
}

export default App
