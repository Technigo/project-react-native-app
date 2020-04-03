import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Question } from './assets/Components/Question'
import { ShakeEventExpo } from './assets/Components'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const App = () => {
  const [firstView, setFirstView] = useState(false)

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
    } else {
      
    }
  }

  

  return (
    <Container>
      <Question />
    </Container>
  )
}

export default App
