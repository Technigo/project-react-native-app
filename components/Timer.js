import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text, Vibration } from "react-native"
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'


const Container = styled.View`
  min-height: 120px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.View`
  min-height: auto;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const ShowSession = styled.Text`
  color: black;
  font-size: 28px;
  color: rgb(114, 200, 158);
  text-transform: lowercase;
  font-weight: bold;
  margin-bottom: -10px;
`

const ShowLength = styled.Text`
  color: rgb(114, 200, 158);
  font-size: 24px;
`

const Button = styled.TouchableOpacity`
  min-width: 100px;
  text-align: center;
  border-radius: 5px;
  background: rgb(242, 67, 59);
  text-transform: uppercase;
`

export default function Timer({ session, setTimerMinute, timerMinute, setSessionLength, setBreakLength }) {

  const [paused, setPaused] = useState(true)
  const [over, setOver] = useState(false)
  const [timerSecond, setTimerSecond] = useState(0)

  const pattern = [1000, 2000, 3000]

  const tick = () => {
    // do nothing if paused or over
    if (paused || over) return;

    // Time up
    if (timerMinute === 0 && timerSecond === 0) {
      setOver(true)
      Vibration.vibrate(pattern)
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
    setPaused(true)
    setOver(false)
    setSessionLength(25)
    setBreakLength(5)
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  })

  let [fontsLoaded] = useFonts({
    'Baloo-Paaji-ExtraBold': require('../assets/fonts/BalooPaaji2-ExtraBold.ttf'),
    'Baloo-Paaji-Bold': require('../assets/fonts/BalooPaaji2-Bold.ttf'),
    'Manrope-Light': require('../assets/fonts/Manrope-Light.ttf'),
    'Manrope-Medium': require('../assets/fonts/Manrope-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Container>
          <ShowSession style={{ fontFamily: 'Baloo-Paaji-ExtraBold' }}>{session ? 'focus' : 'break'} length</ShowSession>
          <ShowLength style={{ fontFamily: 'Baloo-Paaji-ExtraBold' }}>{`${timerMinute.toString().padStart(2, '0')}`}:{`${timerSecond.toString().padStart(2, '0')}`}</ShowLength>
        </Container>
        <ButtonContainer>
          <Button onPress={() => setPaused(!paused)}>
            <Text style={{ fontFamily: 'Manrope-Medium', color: 'white' }}>{paused ? 'start' : 'pause'}</Text>
          </Button>
          <Button onPress={reset}>
            <Text style={{ fontFamily: 'Manrope-Medium', color: 'white' }}>refresh</Text>
          </Button>
        </ButtonContainer>
        {over ? <Container><Text>Time is up</Text></Container> : null}
      </>
    )
  }
}