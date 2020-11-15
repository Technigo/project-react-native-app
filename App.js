/* import React from 'react'
import styled from 'styled-components/native'
import { Button } from 'react-native'

import { FortuneMessage } from './Components/FortuneMessage'

  export default function App () {

  return (
    <Container>
      
      <Button title='🐸' />  
      <IconText>Tap me!</IconText>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: pink;
  justify-content: center;
  align-items: center;
`

const IconText = styled.Text`
font-size: 30px;
color: palevioletred;
` */

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

    const getFortune = () => {
      fetch(fortuneURL)

      .then(response => response.json())
      .then(json => setFortune(json) 
      )
  }

  useEffect (getFortune, [])

  return (
    
    <FortuneContainer>
      <FortuneText>{fortune}</FortuneText>
        <Button title="GENERATE FORTUNE" onPress={getFortune} />
    </FortuneContainer>
    )
  
}  

export default App


