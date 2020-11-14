import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Pedometer } from 'expo-sensors';

const Container = styled.View`
justify-content: center;
align-items: center;
top: 50px;
`

const Title = styled.Text`
  font-size: 15px;
  margin: 10px;
  color: 'rgb(rgb(0, 0, 0)';
`

  const StepCounter = () => {
    const [currentSteps, setCurrentSteps] = useState(0);
    const [previousSteps, setPreviousSteps] = useState(0);
    const [weeklySteps, setWeeklySteps ] = useState(0);

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);

    const weekEnd = new Date();
    const weekStart = new Date();
    weekStart.setDate(weekEnd.getDate() - 7);

    useEffect(() => {
      Pedometer.watchStepCount(result => {
        setCurrentSteps(result.steps)
      })
      Pedometer.getStepCountAsync(start, end)
        .then(result => {
          setPreviousSteps(result.steps);
        })
      Pedometer.getStepCountAsync(weekStart, weekEnd)
        .then(result => {
          setWeeklySteps(result.steps);
        })
    });

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
    );
};

export default StepCounter