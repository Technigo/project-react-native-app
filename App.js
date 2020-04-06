import React from 'react'
import { Houses } from './components/Houses'
import { Detail } from './components/Detail'
import styled from 'styled-components/native'


const Container = styled.View`
flex: 1;
background-color: orange;
justifyContent: space-between;
paddingHorizontal: 20;
paddingVertical: 20;
`


const App = () => {
  return (
    <Container>
      <Houses></Houses>
      <Detail></Detail>
    </Container>
  )
}

export default App
