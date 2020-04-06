import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Question } from './assets/Components/Question'
import { Answer } from './assets/Components/Answer'
import { ShakeEventExpo } from './assets/Components/ShakeEventExpo'

const Background = styled.View`
  flex: 1;
  background-color: #dbcb9e;
  justify-content: center;
  align-items: center;
`

const App = () => {
  const [firstView, setFirstView] = useState()

  useEffect(() => {
    ShakeEventExpo.addListener(() => {
      shakePhone();
    });

    return () => {
      ShakeEventExpo.removeListener();
    };
  }, []);

  const shakePhone = () => {
    if (firstView) {
      showAnswer()
      setTimeout(() => setViewOne(!firstView), 2000);
    } else { setFirstView(!firstView)}
  }

  return (
    <Background>
      {firstView ? (
        <Question firstView={firstView} />
      ) : (
        <Answer />
      )} 
    </Background>
  )
}

export default App
