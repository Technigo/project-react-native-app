import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Question } from './assets/Components/Question'
import { Answer } from './assets/Components/Answer'
import { ShakeEventExpo } from './assets/Components/ShakeEventExpo'


const Background = styled.View`
  flex: 1;
  background-color: #DFB4B6;
  justify-content: center;
  align-items: center;
  border: 30px solid #393B6A;
`

const App = () => {
  const [firstView, setFirstView] = useState(true)

  const shakePhone = () => {
    setFirstView(false)
  }

  useEffect(() => {
    ShakeEventExpo.addListener(() => {
      shakePhone()
    })

    return () => {
      ShakeEventExpo.removeListener();
    }
  }, [])

  

  return (
    <Background>
      {firstView ? (
        <Question />
      ) : (
        <Answer onStartAgain={() => setFirstView(true)} />
      )}
    </Background>
  )
}

export default App