import React, { useState, useEffect } from "react"
import { Pedometer } from "expo-sensors"
import styled from "styled-components/native"

const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`

const Container = styled.View`
justify-content: center;
align-items: center;
`

const DoggoStepCounter = () => {
  const [pastStepCount, setPastStepCount] = useState(0)

  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 1);

  useEffect(() => {
    Pedometer.getStepCountAsync(start, end)
      .then(result => {
        setPastStepCount(result.steps);
      })
  })

  return (
    <Container>
      <Title>Doggo steps taken today: {pastStepCount}</Title>
    </Container>
  )
}

export default DoggoStepCounter