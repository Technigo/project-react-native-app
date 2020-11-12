import React, { useState, useEffect } from 'react'
import { Pedometer } from 'expo-sensors'
import { Button } from 'react-native'

import { ColorDiv3 } from './Container'
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
    <ColorDiv3>
      <Title>Steps this week: {weeklySteps}</Title>
      <Button title='Steps Today' onPress={navigateToToday}></Button>
    </ColorDiv3>

  )
}