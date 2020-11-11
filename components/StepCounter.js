import React, { useState, useEffect } from 'react';
import { Pedometer } from 'expo-sensors'
import LottieView from 'lottie-react-native';

import { Container } from './Container'
import { TopContainer } from './Container'
import { BottomContainer } from './Container'

import { Title1 } from './Title'
import { Title2 } from './Title'
import { Title3 } from './Title'

/* getStepCountAsync - Returns a promise that resolves to an Object with a steps key, which is a Number indicating the number of steps taken between the given dates. */

export const StepCounter = () => {
  const [steps, setSteps] = useState(0)
  const [weeklySteps, setWeeklySteps] = useState(0)
  const [todaysSteps, setTodaysSteps] = useState(0)
  const [evaluateSteps, setEvaluateSteps] = useState(false)

  const stepsLeft = 10000-todaysSteps

  const endWeek = new Date()
  const startWeek = new Date()
  startWeek.setDate(endWeek.getDate() - 7)

  const endToday = new Date()
  const startToday = new Date()
  startToday.setDate(endToday.getDate() - 1)

  useEffect(()=>{
    Pedometer.watchStepCount(result => {
      setSteps(result.steps)
    })
    Pedometer.getStepCountAsync(startWeek, endWeek)
      .then(result => {
        setWeeklySteps(result.steps)
    })
    Pedometer.getStepCountAsync(startToday, endToday)
      .then(result => {
        setTodaysSteps(result.steps)
        if(todaysSteps > 10000) {
          return setEvaluateSteps(true)
        }
    })
  }, [steps])
  /* should I have more dependencies here or is this enough? every time steps updates the useEffect updates the states */

  return (
    <Container>
      <TopContainer>
        <Title1>Steps last 24 hours: {todaysSteps}</Title1>
        <LottieView 
          source={evaluateSteps ? require('../assets/cup.json') : require('../assets/walkingMan.json')}
          autoPlay
          style={{ width: 300, height: 300}}
        />
      </TopContainer>
      <BottomContainer>
        <Title2>Steps this week: {weeklySteps}</Title2>
        <Title3>Current steps: {steps}</Title3>
        {evaluateSteps ? 
        <Title1>Yay! You made it!</Title1> : 
        <Title1>Steps left to 10 000: {stepsLeft} </Title1>
        }
      </BottomContainer>
    </Container>
  )
}

