import React, { useState, useEffect } from 'react'
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

export default function Timer({ session, setTimerMinute, timerMinute }) {

  const [paused, setPaused] = useState(false)
  const [over, setOver] = useState(false)
  const [timerSecond, setTimerSecond] = useState(0)

  const tick = () => {
    // do nothing if paused or over
    if (paused || over) return;

    // Time up
    if (timerMinute === 0 && timerSecond === 0) {
      setOver(true)
    } else if (timerSecond === 0) {
      // decrement minute
      setTimerMinute(m => m - 1)
      setTimerSecond(59)
    } else {
      // decrement seconds
      setTimerMinute(timerMinute)
      setTimerSecond(s => s - 1)
    }
  }

  // Resets to original state
  const reset = () => {
    setTimerMinute(25)
    setTimerSecond(0)
    setPaused(false)
    setOver(false)
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  })

  return (
    <>
      <Container>
        <Title>Session </Title>
        <ShowSession>{session ? 'Focus' : 'Break'}</ShowSession>
        <ShowLength>{`${timerMinute.toString().padStart(2, '0')}`}:{`${timerSecond.toString().padStart(2, '0')}`}</ShowLength>
      </Container>
      <ButtonContainer>
        <Button onPress={() => setPaused(!paused)}>
          <Text>{paused ? 'Start' : 'Pause'}</Text>
        </Button>
        <Button onPress={reset}>
          <Text>Refresh</Text>
        </Button>
      </ButtonContainer>
      {over ? <Container><Text>Time is up</Text></Container> : null}
    </>
  )
}


