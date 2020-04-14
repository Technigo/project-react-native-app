import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Text } from "react-native"

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
const Container = styled.View`
  background-color: white;
`

const ButtonContainer = styled.View`
  background-color: blue;
`

const ShowSession = styled.Text`
  color: black;
  background-color: red;
`

const ShowLength = styled.Text`
  color: blue;
  background-color: red;
`

const Button = styled.TouchableOpacity`
  color: black;
  background-color: yellow;
`

export default function Timer({ session, timerMinute, breakTimer }) {

  const [timerSecond, setTimerSecond] = useState(0)

  return (
    <>
      <Container>
        <Title>Session </Title>
        <ShowSession>{session ? 'Session' : 'Break'}</ShowSession>
        <ShowLength>{timerMinute}</ShowLength>
        <ShowLength>:</ShowLength>
        <ShowLength>{timerSecond === 0
          ? '00'
          : timerMinute < 10
            ? `0${timerSecond}`
            : timerSecond}</ShowLength>
      </Container>
      <ButtonContainer>
        <Button>
          <Text>Start</Text>
        </Button>
        <Button>
          <Text>Pause</Text>
        </Button>
        <Button>
          <Text>Refresh</Text>
        </Button>
      </ButtonContainer>
    </>
  )
}


