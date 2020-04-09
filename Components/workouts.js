import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Text, View, Vibration, TouchableOpacity } from 'react-native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
`

const PickButton = styled.TouchableOpacity`
  background-color: papayawhip;
  padding: 10px;
  border: 2px solid #466687;
  margin: 10px;
  width: 200px;
  border-radius: 5px;
`
const ButtonText = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #466687
`

const WorkoutContainer = styled.View`
  padding: 40px;
  width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 5px;
`

const WorkoutText = styled.Text`
  font-size: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`

export const Workouts = () => {

  const WorkoutArray = [
    {
      workout: "10 squats 10 pushups 10 burpees x10",
      category: "Strength",
      color: "#e7c1b6", //rosa
      emoji: "💪🏼"
    },
    {
      workout: "Run 5km",
      category: "fitness",
      color: "#f68b64", //orange
      emoji: "🏃‍♂️"
    },
    {
      workout: "Yoga",
      category: "flexibility",
      color: "#b9cab4", //grön
      emoji: "🦧"
    },
    {
      workout: "Walk 10 000 steps",
      category: "fitness",
      color: "#f68b64", //orange
      emoji: "🏃‍♂️"
    },
    {
      workout: "10 lounges 10 squat jumps 10 burpees x10",
      category: "Strength",
      color: "#e7c1b6", //rosa
      emoji: "💪🏼"
    },
    {
      workout: "Run as fast as you can",
      category: "fitness",
      color: "#f68b64", //orange
      emoji: "🏃‍♂️"
    },
    {
      workout: "Dance",
      category: "flexibility",
      color: "#b9cab4", //grön
      emoji: "🦧"
    },
    {
      workout: "Climb lots of stairs",
      category: "fitness",
      color: "#f68b64", //orange
      emoji: "🏃‍♂️"
    },
  ]

  const [workout, setWorkout] = useState({})

  const getWorkout = () => {
    const theWorkout = WorkoutArray[Math.floor(Math.random() * WorkoutArray.length)]
    setWorkout(theWorkout)
  }

  return (
    <Container>
      <WorkoutContainer style={{ backgroundColor: workout.color }}>
        <WorkoutText>
          {workout.workout}
        </WorkoutText>
        <WorkoutText>
          {workout.emoji}
        </WorkoutText>
      </WorkoutContainer>
      <PickButton onPress={() => { getWorkout(); Vibration.vibrate() }}>
        <ButtonText>Get random workout</ButtonText>
      </PickButton>
    </Container>
  )
}
