import React from 'react'
import styled from 'styled-components'

import ButtonDice from './components/ButtonDice'
import ShakeDice from './components/ShakeDice'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
`

const App = () => {
  return (
    <Container>
      <ShakeDice />
    </Container>
  )
}

export default App