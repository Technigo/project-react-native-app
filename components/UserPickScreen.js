import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, TouchableOpacity, Text } from "react-native";

const InfoText = styled.Text`
  font-size: 48px;
`;

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const UserPickScreen = ({ navigation}) => {
  const [userPick, setUserPick] = useState('');
  const [compPick, setCompPick] = useState('');
  const choices = ['Rock', 'Paper', 'Scissors'];

  const setChoices = (value) => {
    setUserPick(value);
    setCompPick(choices[Math.floor(Math.random() * choices.length)]);
  }

  const navigateToResult = () => {
    navigation.navigate("Result", { compChoice: compPick, userChoice: userPick });
      console.log('userPick: ' + userPick);
      console.log('compPick: ' + compPick);
  }

  return (
    <InfoContainer>
      <InfoText>Make your choice</InfoText>
      <TouchableOpacity onPress={() => setChoices('Rock')}>
        <Text>Rock</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setChoices('Paper')}>
        <Text>Paper</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setChoices('Scissors')}>
        <Text>Scissors</Text>
      </TouchableOpacity>
      <Text>You picked: {userPick}</Text>
      <Button title="Play" onPress={navigateToResult} ></Button>
    </InfoContainer>
  )
}

export default UserPickScreen;