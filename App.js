import React from 'react'
import styled from 'styled-components/native'
import { JokesGenerator } from './components/JokesGenerator'




const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width:100%;
`

const App = () => {
  
  return (
    <MainContainer>
      <JokesGenerator />
    </MainContainer>
  )
}

export default App
