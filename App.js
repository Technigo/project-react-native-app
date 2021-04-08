import React  from 'react'
import styled from 'styled-components/native'

import { CatFacts } from './components/CatFacts'

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
      <Title>Very important cat facts</Title>
      <CatFacts />
    </Container>
  )
}

export default App
