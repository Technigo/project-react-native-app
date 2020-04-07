import React, { useState, useEffect } from "react"
import styled from 'styled-components/native'
import { Pedometer } from "expo-sensors"

const Title = styled.Text`
  font-size: 18px;
  margin: 8px;
  color: #182C61;
`

const Text = styled.Text`
  font-size: 18px;
  margin: 28px;
  font-weight: bold;
  color: #182C61;
`
const Container = styled.View`
background-color: #F8EFBA;
justify-content: center;
align-items: center;
`

const StepCounter = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0)
  const [pastStepCount, setPastStepCount] = useState(0)
  const [weekStepCount, setWeekStepCount] = useState(0)

  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 1);

  const weekEnd = new Date();
  const weekStart = new Date();
  weekStart.setDate(weekEnd.getDate() - 7);

  useEffect(() => {
    Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps)
    })
    Pedometer.getStepCountAsync(start, end)
      .then(result => {
        setPastStepCount(result.steps);
      })
    Pedometer.getStepCountAsync(weekStart, weekEnd)
      .then(result => {
        setWeekStepCount(result.steps);
      })
  })

  return (
    <Container>
      <Title>Steps taken the last week: {weekStepCount}</Title>
      <Title>Steps taken the last 24 hours: {pastStepCount}</Title>
      <Text>Walk and watch this go up: {currentStepCount}</Text>
    </Container>
  )
}

export default StepCounter