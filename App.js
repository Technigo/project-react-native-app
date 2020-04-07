import React from 'react'
import { Nasa } from './components/Nasa'
import styled from 'styled-components/native'
import { Tap } from './components/Tap'

const App = () => {

  return (

    <Container>
      <Nasa></Nasa>
      <Tap></Tap>
    </Container>
  )
}

export default App

const Container = styled.View`
flex: 1;
background-color: papayawhip;
justify-content: center;
align-items: center;
`

