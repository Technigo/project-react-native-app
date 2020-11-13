import React, { useEffect, useState } from 'react';
import { Pedometer } from 'expo-sensors';

// for future use rember this; npm install --save styled-components, frickin awesome //
import styled from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  justify-content: center;
`

const Title = styled.Text `
  color: red;
  margin: 8px;
  font-size: 15px;
`

const StepCounter = () => {
  const [currentSteps, setCurrentSteps] = useState(0);
  const [previousSteps, setPreviousSteps] = useState(0);
  const [weeklySteps, setWeeklySteps ] = useState(0);

  const start = new Date();
  const end = new Date();
  start.setDate(end.getDate() - 1);

  const weeklyStart = new Date();
  const weeklyEnd = new Date();
  weeklyStart.setDate(weeklyEnd.getDate() - 7);


  useEffect(() => {
    Pedometer.updateStepCount(result => {
      setCurrentSteps(result.steps);
    })
    Pedometer.getSteps(start, end)
     .then(result => {
       setPreviousSteps(result.step);
     })
     Pedometer.getSteps(weeklyStart, weeklyEnd)
      .then(result => {
        setWeeklySteps(result.steps);
      })
  }) 

  return (
    <Container>
      <Title>
        Live stepometer: {currentSteps}
      </Title>
      <Title>
        Number of steps taken today: {previousSteps}
      </Title>
      <Title>
        Number of steps taken last seven days: {weeklySteps}
      </Title>
    </Container>
  )
}

export default StepCounter 
