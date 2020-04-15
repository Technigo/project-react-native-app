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

export default function Timer({ session, breakTimer, setTimerSecond, timerSecond }) {

  const [paused, setPaused] = useState(true)

  useEffect(() => {
    const int = setInterval(() => {
      if (!paused) {
        setTimerSecond(s => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [paused]);

  function startTimer() {
    setPaused(false);
  }
  function pauseTimer() {
    setPaused(true);
  }
  function resetTimer() {
    setPaused(true);
    setTimerSecond(25 * 60);
  }

  /*
  const start = () => {
    const idForTimer = setInterval(() => {
      if (timerSecond > 0) {
        setTimerSecond((prevState) => prevState - 1)
      } if (timerSecond === 0) {
        if (timerMinute === 0) {
          clearInterval(idForTimer)
        } else {
          setTimerMinute((prevState) => prevState - 1)
          setTimerSecond(59)
        }
      }
    }, 1000)
  }
  */

  return (
    <>
      <Container>
        <Title>Session </Title>
        <ShowSession>{session ? 'Session' : 'Break'}</ShowSession>
        <ShowLength>{`${Math.floor(timerSecond / 60)}`} : {`${("00" + (timerSecond % 60)).slice(-2)}`}</ShowLength>
      </Container>
      <ButtonContainer>
        <Button onPress={paused ? startTimer : pauseTimer}>
          <Text>{paused ? 'Start' : 'Pause'}</Text>
        </Button>
        <Button onPress={resetTimer}>
          <Text>Refresh</Text>
        </Button>
      </ButtonContainer>
    </>
  )
}


