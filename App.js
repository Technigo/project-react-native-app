import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import { Pedometer } from 'expo-sensors'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  background: black;
  margin: 10px;
  color: white;
  padding: 20px;
`
/* getStepCountAsync - Returns a promise that resolves to an Object with a steps key, which is a Number indicating the number of steps taken between the given dates. */
const App = () => {
  const [steps, setSteps] = useState(0)
  const [weeklySteps, setWeeklySteps] = useState(0)
  const [todaysSteps, setTodaysSteps] = useState(0)
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
    })
  }, [steps])
  /* should I have more dependencies here or is this enough? every time steps updates the useEffect updates the states */


  return (
    <Container>
      <Title>Steps this week: {weeklySteps}</Title>
      <Title>Steps last 24 hours: {todaysSteps}</Title>
      <Title>Current steps: {steps}</Title>
      <Title>{stepsLeft}</Title>
    </Container>
  )
}

export default App

