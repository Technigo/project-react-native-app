import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Firstpage } from './components/Firstpage'
import { Houses } from './components/Houses'

import { ShakeEvent } from './components/ShakeEvent'

const Background = styled.View`
  flex: 1;
  background-color: #3b2e5a;
  justify-content: center;
  align-items: center;
  border: 20px solid #706897;
`

const App = () => {
  const [firstView, setFirstView] = useState(true)

  const shakePhone = () => {
    setFirstView(false)
  }

  useEffect(() => {
    ShakeEvent.addListener(() => {
      shakePhone();
    })
    return () => {
      ShakeEvent.removeListener();
    }
  }, [])

  return (
    <>
      <Background>
        {firstView ? (
                <FirstPage />
              ) : (
                <Houses onStartAgain={() => setFirstView(true)} />
              )}
      </Background>
    </>
  )
}

export default App