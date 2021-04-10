import React  from 'react'
import styled from 'styled-components/native'

import { CatSection } from './components/CatSection'
import flowerimage from './assets/flowerimage.jpg'

const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 35px;
  margin: 30px 25px 40px 25px;
  color: #ae3043;
  font-weight: bold;
  text-align: center;
`

const App = () => {
  return (
    <Container source={flowerimage}>
      <Title>A cat a day keeps the bad mood away 😸</Title>
      <CatSection />
    </Container>
  )
}

export default App;