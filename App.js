import React from 'react'
import styled from 'styled-components/native'
import { Button } from 'react-native'

/* import { FortuneMessage } from './Components/FortuneMessage' */

  export default function App () {

  return (
    <Container>
      
      <Button title='🐸' />  {/* when onPress -> hide button & display a fortune from the API in FortuneMessage */}
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
`



