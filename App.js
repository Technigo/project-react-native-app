import React, { useState } from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { FortuneMessage } from './Components/FortuneMessage'

const FortuneContainer = styled.View`
  flex: 1;
  background-color: violet;
  justify-content: center;
  align-items: center;
  `

const FortuneText = styled.Text`
font-size: 90px;
margin-bottom: 20px;
`

const App = () => {
  const [showFortune, setShowFortune] = useState(false);
  const [hideFirstPage, setHideFirstPage] = useState(false);
  

    const getFortune = () => {
      setShowFortune(true);
      setHideFirstPage(true);
    };
    const newFortune = () => {
      setShowFortune(false);
      setHideFirstPage(false);
    };

    return (
      <>
        {!hideFirstPage && ( 
          <FortuneContainer>
            <FortuneText>✨ 🐸 ✨</FortuneText>
            <Button title="TAP HERE TO GET A FORTUNE" color="green" onPress={getFortune} />
          </FortuneContainer>
        )}

        {showFortune && (  
          <FortuneContainer>
            <FortuneMessage />
            <Button title="GO BACK" color="green" onPress={newFortune} />
          </FortuneContainer>
        )}
      </>
    )
}

export default App

