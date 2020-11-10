import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Vibration } from 'react-native';

export const WorkoutType = () => {

  const WorkoutTypesArray = [
      { 
        workout: 'Yoga', 
        color: 'pink'
      },
      { 
        workout: 'Run', 
        color: 'green'
      },
      { 
        workout: 'Lift', 
        color: 'black'
      },
  ]

  const [workout, setWorkout] = useState({});

  const getWorkout = () => {
    const theWorkout = WorkoutTypesArray[Math.floor(Math.random() * WorkoutTypesArray.length)]
    setWorkout(theWorkout)
  }

  return (
    <Container>
      <WorkoutContainer style={{ backgroundColor: workout.color }}>
        <WorkoutText>
          {workout.workout}
        </WorkoutText>
      </WorkoutContainer>
      <PickButton onPress={() => { getWorkout(); Vibration.vibrate() }}>
        <ButtonText>Get today's workout</ButtonText>
      </PickButton>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`

const PickButton = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px;
  border: 2px solid #fff;
  margin: 10px;
  width: 200px;
  border-radius: 8px;
`

const ButtonText = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #efefef;
`

const WorkoutContainer = styled.View`
  padding: 40px;
  width: 300px;
  height: 160px;
  margin: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

const WorkoutText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
`