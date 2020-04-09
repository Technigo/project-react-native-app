import React from 'react'
import styled from 'styled-components/native'
import { ListPage } from './ListPage'

const Container = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`


const App = () => {
  return (
    <Container>
      <ListPage />
    </Container>
  )
}

export default App
