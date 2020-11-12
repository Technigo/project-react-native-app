import React from 'react'
import styled from 'styled-components/native'

import { FortuneMessage } from './Components/FortuneMessage'

  export const App = () => {

  return (
    <>
    <Container>
      <FortuneMessage />
    </Container>
    </>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: pink;
  justify-content: center;
  align-items: center;
`

export default App
