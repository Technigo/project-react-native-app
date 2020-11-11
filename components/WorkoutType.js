import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

export const WorkoutType = ({navigation}) => {

  useEffect(()=> {
    navigation.setOptions({headerShown:false});
  });

  const WorkoutTypesArray = [
      { 
        workout: 'Yoga', 
        color: '#588B8B',
        image: './assets/yoga.png'
      },
      { 
        workout: 'Run', 
        color: '#597799',
        image: './assets/yoga.png'
      },
      { 
        workout: 'Lift', 
        color: '#5F91A3',
        image: './assets/yoga.png'
      },
      {
        workout: 'Walk', 
        color: '#5FA390',
        image: './assets/yoga.png'
      },
      {
        workout: 'Rest Day', 
        color: '#599975',
        image: './assets/yoga.png'
      },
  ]

  const [workout, setWorkout] = useState({});

  const getWorkout = () => {
    const theWorkout = WorkoutTypesArray[Math.floor(Math.random() * WorkoutTypesArray.length)]
    setWorkout(theWorkout)
  };

  return (
    <Container>
      <WorkoutContainer style={{ backgroundColor: workout.color }}>
        <WorkoutButton 
          key={workout.workout}
          onPress={() => navigation.navigate('Workout', {workout})}>
          <WorkoutText>{workout.workout}</WorkoutText>
          <WorkoutImage source={{ uri: workout.image}}/>
        </WorkoutButton>
      </WorkoutContainer>
      <PickButton onPress={() => { getWorkout(); }}>
        <ButtonText>Get today's workout</ButtonText>
      </PickButton>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  flex: 1;
  background-color: #FFD5C2;
`

const PickButton = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px;
  border: 2px solid #C8553D;
  margin: 15px;
  width: 240px;
  border-radius: 8px;
`

const ButtonText = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #C8553D;
  font-family: 'Inter-Regular';  
  font-size: 18px;
  letter-spacing: 1px;
`

const WorkoutContainer = styled.View`
  padding: 40px;
  width: 300px;
  height: 250px;
  margin: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

const WorkoutButton = styled.TouchableOpacity`
  text-align: center;
  text-shadow: 0.5px 0.5px 1px #fff;
  text-transform: uppercase;
`

const WorkoutText = styled.Text`
  font-family: 'Inter-Regular';    
  font-size: 26px;
  color: #C8553D;
  text-shadow: 0.5px 0.5px 1px #fff;
  text-transform: uppercase;
`

const WorkoutImage = styled.Image`
  height: 50px;
  width: 50px;
`