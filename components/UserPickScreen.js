import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, TouchableOpacity, Text, Image, View } from "react-native";

import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';
import lizard from '../assets/lizard.png';
import spock from '../assets/spock.png';

const InfoText = styled.Text`
  flex: 1;
  font-size: 40px;
  text-align: center;
  padding-top: 20px;
  background: blue;
`;

const InfoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: grey;
`;

const ImagesContainer = styled.View`
  flex: 2;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: pink;
`;

const LowerContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: yellow;
`;

const ChoiceImage = styled.Image`
  height: 50px;
  width: 50px;
`;

const LinkImage = styled.TouchableOpacity`
  height: 120px;'
  width: 100px;
  border: 2px solid black;
  background: green;
  justify-content: center;
  align-items: center;
`;

const UserPickScreen = ({ navigation}) => {
  const [userPick, setUserPick] = useState('');
  const [compPick, setCompPick] = useState('');
  const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

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
      <InfoText>Click on your choice</InfoText>
      <ImagesContainer>
        <LinkImage onPress={() => setChoices('Rock')}>
          <ChoiceImage
            source={rock}
          />
          <Text>Rock</Text>
        </LinkImage>
        <LinkImage onPress={() => setChoices('Paper')}>
          <ChoiceImage
            source={paper}
          />
          <Text>Paper</Text>
        </LinkImage>
        <LinkImage onPress={() => setChoices('Scissors')}>
          <ChoiceImage
            source={scissors}
          />
          <Text>Scissors</Text>
        </LinkImage>
        <LinkImage onPress={() => setChoices('Lizard')}>
          <ChoiceImage
            source={lizard}
          />
          <Text>Lizard</Text>
        </LinkImage>
        <LinkImage onPress={() => setChoices('Spock')}>
          <ChoiceImage
            source={spock}
          />
          <Text>Spock</Text>
        </LinkImage>
      </ImagesContainer>
      <LowerContainer>
        <Text>You picked: {userPick}</Text>
        <Button title="Play" onPress={navigateToResult} ></Button>

      </LowerContainer>





    </InfoContainer>
  )
}

export default UserPickScreen;