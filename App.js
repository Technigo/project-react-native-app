import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

import { CatFacts } from './pages/CatFacts'
import { DogFacts } from './pages/DogFacts'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`

const App = () => {
  return (
    <Container>
      <Title>Random Facts</Title>
      <Text>This App gives you random information about cats and dogs, because - why not?</Text>
      <CatFacts></CatFacts>
      <DogFacts></DogFacts>
    </Container>
  )
}

export default App
