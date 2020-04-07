import React from 'react'
import { Nasa } from './components/Nasa'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (

<Container>
  <Nasa></Nasa>
</Container>
  )
}

export default App
