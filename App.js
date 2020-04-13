
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

const Container = styled.View`
  background-color: lightblue;  
  flex: 1;
  align-items: center;
  justify-content: center;
  `
const Title = styled.Text`
  color: blue;
  font-size: 35px;
`
const Paragraph = styled.Text`
  color: purple;
  font-size: 25px;
  padding-top: 15px;
`

const App = () => {
  const [count, setCount] = useState(0)
  const onPress = () => setCount(prevCount => prevCount + 1)

  return (
    <Container>
      <Title>Let´s Count Bunnies!</Title>
      <TouchableOpacity
        onPress={onPress}
      >
        <Paragraph>Press Me</Paragraph>
      </TouchableOpacity>
      <Title>{count}</Title>
      <Title>🐰🐰🐰</Title>
    </Container>
  )
}

export default App