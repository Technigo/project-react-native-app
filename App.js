import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import { MagicAnswer } from './components/MagicAnswer';
import { ShakeSensor } from './components/ShakeSensor'
import { StartPage } from './components/StartPage'
// import { ShakeShake } from './components/ShakeShake'


const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const App = () => {
//  const [startScreen, setStartScreen] = useState(true)

  // Hur gör jag detta? Phone shake and initial screen will be set to false ---> instead render message inside of magic answer. 
/*   const shake = () => {
    setStartScreen(false);
  }

  useEffect(() => {
    ShakeSensor.addListener(() => {
      shake();
    })
    return () => {
      ShakeSensor.removeListener();
    }
  }, []) */

/* leftover from tryout rendering of each component earlier::: ---->   
  <Container>
    <ShakeSensor></ShakeSensor>
    <MagicAnswer></MagicAnswer>
  </Container> */

  return (
    <Container>
      <MagicAnswer></MagicAnswer>
    {/* <ShakeSensor></ShakeSensor> */}
{/*     {startScreen ? (
    <StartPage></StartPage>
    ) : (
    <MagicAnswer></MagicAnswer>
    )} */}
    </Container>
  )
}

export default App
