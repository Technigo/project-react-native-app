import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Firstpage } from './components/Firstpage'
import { Houses } from './components/Houses'
import { Button } from './components/Button'

const Background = styled.View`
  flex: 1;
  background-color: #c4b6b6 ;
  justify-content: center;
  align-items: center;
`


const App = () => {
  const [firstView, setFirstView] = useState(true)


  return (
    <>
      <Background>
      <Firstpage/>
      <Button/>
      </Background>

    </>
  )
}

export default App