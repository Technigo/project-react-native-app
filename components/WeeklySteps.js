import React, { useState, useEffect } from 'react'
import { Pedometer } from 'expo-sensors'
import { Button, Text } from 'react-native'
import LottieView from 'lottie-react-native'

import { BottomContainer, ColorDiv3, Container, TopContainer } from './Container'
import { Title } from './Title'

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
        <ColorDiv3>
          <Title>Steps this week: {weeklySteps}</Title>
        </ColorDiv3>
        <LottieView 
          source={require('../assets/walkingMan.json')}
          autoPlay
          style={{ width: 300, height: 300}}
        />
      </TopContainer>
      <BottomContainer>
        <Text>"Everywhere is walking distance if you have the time!"</Text>
        <Button title='Steps Today' onPress={navigateToToday}>
        </Button>
      </BottomContainer>
    </Container>
  )
}