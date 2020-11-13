import React, { useState, useEffect } from 'react'
import { Pedometer } from 'expo-sensors'
import LottieView from 'lottie-react-native'

import { 
  BottomContainer, 
  ColorContainer2, 
  ColorContainer3, 
  MainContainer, 
  TopContainer 
} from './Containers'
import { Title, Quote } from './Texts'
import { Button, ButtonText } from './Button'

export const WeeklySteps = ({navigation}) => {
  const [weeklySteps, setWeeklySteps] = useState(0)
  const endWeek = new Date() 
  const startWeek = new Date()
  startWeek.setDate(endWeek.getDate() - 7)

  useEffect(() => {
    Pedometer.getStepCountAsync(startWeek, endWeek)
    .then(result => {
      setWeeklySteps(result.steps)
    })
  })

  const navigateToToday = () => {
    navigation.navigate('Today')
  }

  useEffect(() => {
    navigation.setOptions({headerShown:false})
  }, [])

  return (
    <MainContainer>

      <TopContainer>
        <ColorContainer2>
          <Title>Steps this week: {weeklySteps}</Title>
        </ColorContainer2>
        <LottieView 
          source={require('../assets/walkingMan.json')}
          autoPlay
          style={{ width: 300, height: 300}}
        />
      </TopContainer>

      <BottomContainer>
        <ColorContainer3>
          <Quote>"Everywhere is walking distance if you have the time!"
          </Quote>
        </ColorContainer3>
        <Button onPress={navigateToToday}>
          <ButtonText>Today's Info</ButtonText>
        </Button>
      </BottomContainer>

    </MainContainer>
  )
}