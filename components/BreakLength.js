import React from 'react'
import styled from 'styled-components/native'
import { Text } from "react-native"

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
const Container = styled.View`
  background-color: transparent;
  height: auto;
  width: 200;
`

const ShowLength = styled.Text`
  color: black;
  background-color: red;
`

const Button = styled.TouchableOpacity`
  color: black;
  background-color: yellow;
`

export default function BreakLength({ breakLength, setBreakLength }) {

  const downPress = () => {
    if (breakLength === 1) {
      return
    } else {
      setBreakLength(breakLength => breakLength - 1)
    }
  }

  const upPress = () => {
    if (breakLength === 60) {
      return
    } else {
      setBreakLength(breakLength => breakLength + 1)
    }
  }

  return (
    <Container>
      <Title >Break Length</Title>
      <Button onPress={downPress}>
        <Text>Down</Text>
      </Button>
      <ShowLength>{breakLength}</ShowLength>
      <Button onPress={upPress}>
        <Text>Up</Text>
      </Button>
    </Container>
  )
}


