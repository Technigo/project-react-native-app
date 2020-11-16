import React, { useState, useEffect } from 'react'
import { Button, Text } from 'react-native'
import styled from 'styled-components/native'

const fortuneURL = "https://type.fit/api/quotes"

const FortuneContainer = styled.View`
  flex: 1;
  background-color: pink;
  justify-content: center;
  align-items: center;
  `

const FortuneText = styled.Text`
font-size: 30px;
color: palevioletred;
`

  const App = () => {
  const [fortune, setFortune] = useState("")
  const [fortuneIndex, setFortuneIndex] = useState(0)
  const [showFortune, setShowFortune] = useState(false)

  const onPress = () => {
    setShowFortune(true)
  }

  const updateIndex = () => {
    setFortuneIndex(fortuneIndex+1)
  }
    const randomizeFortune = () => {
      fetch(fortuneURL)

      .then(response => response.json())
      .then(json => {

        const formattedArray = json.map(item => item.text) 
        setFortune(formattedArray)
      } 
      
      )
  }

  useEffect (randomizeFortune, [])


  return (
    <>
      <FortuneContainer>
        <Button title="GENERATE FORTUNE" onPress={updateIndex} />
    </FortuneContainer> 

        {!showFortune && (
        <FortuneText>{fortune[fortuneIndex]}</FortuneText>
        
        )}
        </>
  )
  
} 

export default App

