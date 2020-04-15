import React from 'react'
import styled from 'styled-components/native'
import { Text } from "react-native"

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
const Container = styled.View`
  background-color: white;
`

const ShowLength = styled.Text`
  color: black;
  background-color: red;
`

const Button = styled.TouchableOpacity`
  color: black;
  background-color: yellow;
`

export default function SessionLength({ sessionLength, setSessionLength, setTimerSecond }) {

  const downPress = () => {
    if (sessionLength === 1) {
      return
    } else {
      setSessionLength(sessionLength => sessionLength - 1)
      setTimerSecond(sessionLength => sessionLength - 60)
    }
  }

  const upPress = () => {
    if (sessionLength === 60) {
      return
    } else {
      setSessionLength(sessionLength => sessionLength + 1)
      setTimerSecond(sessionLength => sessionLength + 60)
    }
  }

  return (
    <Container>
      <Title>Session Length</Title>
      <Button onPress={downPress}>
        <Text>Down</Text>
      </Button>
      <ShowLength>{sessionLength}</ShowLength>
      <Button onPress={upPress}>
        <Text>Up</Text>
      </Button>
    </Container>
  )
}


