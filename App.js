import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
  const [counter, setCounter] = useState(0)

  const onButtonPressed = () => {
    setCounter(counter + 1)
  }

  return (
    <Container>
      <Title>Hello there</Title>
      <Title>This is your cool app!</Title>
      <Title>{counter}</Title>
      <Button 
        title='Press me'
        color='#841584'
        onPress={onButtonPressed}
      />
    </Container>
  )
}

export default App
