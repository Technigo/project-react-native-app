import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { OracleMessage } from './Components/OracleMessage'
import { ShakeEventFunction } from './Components/ShakeEventFunction'
import { StartScreen } from './Components/StartScreen'

const Container = styled.View`
  flex: 1;
  background-color: #01044d;
  justify-content: center;
  align-items: center;
`

const App = () => {

  const [initialScreen, setInitialScreen] = useState(true)

  const shake = () => {
    setInitialScreen(false);
  }
  useEffect(() => {
    ShakeEventFunction.addListener(() => {
      shake();
    })
    return () => {
      ShakeEventFunction.removeListener();
    }
  }, [])

  return (
    <Container>
      {initialScreen ? (
        <StartScreen/> 
      ):(
        <OracleMessage/>
      )}
    </Container>
  );
};

export default App
