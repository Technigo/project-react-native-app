import React, { useEffect } from 'react';
import styled from 'styled-components/native';

export const WorkoutDetail = ({route, navigation}) => {
  const { workout } = route.params;

  useEffect(()=> {
    navigation.setOptions({headerShown:false});
  });
  
  return (
    <Container>
      <DoTraining>What are you waiting for?</DoTraining>
      <DoTraining>Just go away do {workout.workout}!</DoTraining>
      <BackButton onPress={() => navigation.goBack()}>
        <TextButton>Go Back!</TextButton>
      </BackButton>
    </Container>
  );
};

const BackButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #fff;
  padding: 10px;
  border: 2px solid #C8553D;
  margin: 15px;
  width: 180px;
  border-radius: 8px;
`

const TextButton = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #C8553D;
  font-family: 'Inter-Regular';  
  font-size: 18px;
  letter-spacing: 1px;
`

const Container = styled.View`
  padding: 40px 10px;
  align-items: center;
  flex: 1;
  background-color: #FFD5C2;
`

const DoTraining = styled.Text`
  font-family: 'Inter-Regular';    
  font-size: 26px;
  text-align: center;
  padding: 10px;
  color: #C8553D;
  text-shadow: 0.5px 0.5px 1px #fff;
  text-transform: uppercase;
`