import React from 'react'
import styled from 'styled-components/native'

import { ButtonApi } from './components/ButtonApi'
import { GeoLocate } from './components/GeoLocate'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`

const App = () => {
  return (
    <Container>
      <ButtonApi />
      <GeoLocate />
    </Container>
  )
}

export default App
