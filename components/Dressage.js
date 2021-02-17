import React, { useState, useEffect } from 'react';
import { Vibration } from 'react-native';
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

export const Dressage = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  const exerciseArray = [
    {
      exercise: "Bygg lösgjordhet och styrka med serpentinbågar",
      category: "Lösgjordhet, styrka",
      color: "#fff",
      image: require('../assets/serpentin.gif'),
    },
    {
      exercise: "Basövning för liksidighet och lösgjordhet",
      category: "Lösgjordhet",
      color: "#fff",
      image: require('../assets/basovning.gif'),
    },
    {
      exercise: "Övergångar med åttvoltsövning",
      category: "Lydnad",
      color: "#fff",
      image: require('../assets/attavolt.gif'),
    },
    {
      exercise: "Skänkelvikning och bättre galoppfattningar",
      category: "Lösgjordhet, lydnad",
      color: "#fff",
      image: require('../assets/skvikning.gif'),
    },
    {
      exercise: "Bättre galoppfattningar",
      category: "Styrka, lydnad",
      color: "#fff",
      image: require('../assets/galopp.gif'),
    },
    {
      exercise: "Ulla Håkansons favoritövning",
      category: "Lydnad, lösgjordhet",
      color: "#fff",
      image: require('../assets/ullah.gif'),
    },
  ]

  const [exercise, setExercise] = useState({})

  const getExercise = () => {
    const theExercise = exerciseArray[Math.floor(Math.random() * exerciseArray.length)]
    setExercise(theExercise)
  }

  return (
    <Container>
      <PickButton onPress={() => { getExercise(); Vibration.vibrate() }}>
        <TextPickButton>
          Slumpa övning
        </TextPickButton>
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

      <BackContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <TextBackButton>
            Tillbaka
          </TextBackButton>
        </BackButton>
      </BackContainer>
    </Container>

  );
};

export default Dressage;