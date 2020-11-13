import React from 'react'
import styled from 'styled-components/native'

import {Timer} from './components/Timer'
import {HomeScreen} from './components/HomeScreen'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      <HomeScreen />
      {/* <Timer /> */}
    </Container>
  )
}

export default App
