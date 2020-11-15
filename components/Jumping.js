import React, { useState, useEffect } from 'react';
import { Vibration, View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  flex: 1;
`;

const PickButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #fff;
  border: 2px solid #000;
  width: 200px;
  border-radius: 8px;
  box-shadow: 2px 2px 6px #959695; 
`;

const TextPickButton = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 20px;
  letter-spacing: 1px;
`;

const ExerciseContainer = styled.View`
  width: 400px;
  height: 500px;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #000;
  margin: 15px;
  font-weight: bold;
`;

const ExerciseCategoryText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #000;
  margin: 5px;
`;

const ExerciseImage = styled.Image`
  height: 180px;
  width: 330px;
  margin: 5px;
`;

const BackContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #fff;
  border: 2px solid #000;
  width: 150px;
  border-radius: 8px;
  box-shadow: 2px 2px 6px #959695;
`;

const TextBackButton = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 12px;
  letter-spacing: 1px;
`;

export const Jumping = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  const ExerciseArray = [
    {
      exercise: "Trekombination som kan anpassas",
      category: "Styrka, tempo",
      color: "#fff",
      image: require('../assets/3komb.gif'),
    },
    {
      exercise: "Studs för ridbarhet",
      category: "Spänst, styrka, lydnad",
      color: "#fff",
      image: require('../assets/Kvick.gif'),
    },
    {
      exercise: "Steffis banhoppningsträning",
      category: "Banhoppning, tempo, lydnad ",
      color: "#fff",
      image: require('../assets/Steffis.gif'),
    },
    {
      exercise: "Fokus på galopp och vägar",
      category: "Tempo, Banhoppning",
      color: "#fff",
      image: require('../assets/Brutenlinje.gif'),
    },
    {
      exercise: "Studs för unghästen",
      category: "Styrka, lydnad",
      color: "#fff",
      image: require('../assets/Studs.gif'),
    },
    {
      exercise: "Markarbete för precision",
      category: "Lydnad, lösgjordhet",
      color: "#fff",
      image: require('../assets/Markarbete.gif'),
    },
  ]

  const [exercise, setExercise] = useState({})

  const getExercise = () => {
    const theExercise = ExerciseArray[Math.floor(Math.random() * ExerciseArray.length)]
    setExercise(theExercise)
  }

  return (
    <Container>
      <PickButton onPress={() => { getExercise(); Vibration.vibrate() }}>
        <TextPickButton>Slumpa övning</TextPickButton>
      </PickButton>
      <ExerciseContainer style={{ backgroundColor: exercise.color }}>
        <HeaderText>
          {exercise.exercise}
        </HeaderText>
        <ExerciseCategoryText>
          {exercise.category}
        </ExerciseCategoryText>
        <ExerciseImage source={exercise.image} />
        </ExerciseContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <TextBackButton>Tillbaka</TextBackButton>
        </BackButton>
    </Container>
  );
};