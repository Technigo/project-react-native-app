import React from 'react'
import styled from 'styled-components/native'

import { RandomCats } from './components/RandomCats'
import { AppTitle } from './components/AppTitle'



const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`


const App = () => {
  return (
    <Container>
      <AppTitle name="Random cats app!"/>
      <RandomCats/>
    </Container>
  )
}

export default App
