import React, { useState, useEffect } from 'react'
import { Pedometer } from 'expo-sensors'
import LottieView from 'lottie-react-native'

import { BottomContainer, ColorDiv2, ColorDiv3, Container, TopContainer } from './Container'
import { Title, Quote } from './Title'
import { Button, ButtonText } from './Button'

export const WeeklySteps = ({navigation}) => {
  const [weeklySteps, setWeeklySteps] = useState(0)
  const endWeek = new Date() 
  const startWeek = new Date()
  startWeek.setDate(endWeek.getDate() - 7)

  useEffect(()=>{
    Pedometer.getStepCountAsync(startWeek, endWeek)
    .then(result => {
      setWeeklySteps(result.steps)
    })
  })

  const navigateToToday = () => {
    navigation.navigate('Today')
  }

  useEffect(()=>{
    navigation.setOptions({headerShown:false})
  }, [])

  return (
    <Container>
      <TopContainer>
        <ColorDiv2>
          <Title>Steps this week: {weeklySteps}</Title>
        </ColorDiv2>
        <LottieView 
          source={require('../assets/walkingMan.json')}
          autoPlay
          style={{ width: 300, height: 300}}
        />
      </TopContainer>
      <BottomContainer>
        <ColorDiv3>
          <Quote>"Everywhere is walking distance if you have the time!"</Quote>
        </ColorDiv3>
        <Button onPress={navigateToToday}>
          <ButtonText>
            Today's Info
          </ButtonText>
        </Button>
      </BottomContainer>
    </Container>
  )
}