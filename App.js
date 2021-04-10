import React  from 'react'
import styled from 'styled-components/native'

import { CatSection } from './components/CatSection'
import background from './assets/grassimage.jpg'


const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 35px;
  margin: 30px;
  color: green;
  font-weight: bold;
  text-align: center;
 `

const CatText = styled.Text`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 50px;
  `

const App = () => {
  return (
    <Container source={background}>
      <Title>A cat a day keeps the bad mood away 😸</Title>
      <CatSection />
    </Container>
  )
  }

export default App;