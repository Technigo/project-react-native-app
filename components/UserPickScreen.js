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
  font-size: 48px;
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
  align-items: flex-start;
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

const NextButton = styled.TouchableOpacity`
  height: 100px;
  width: 150px;
  background: white;
  color: black;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 10px;
`;

const ButtonText = styled.Text`
  font-size: 40px;
`;

const UserPickScreen = ({ navigation}) => {
  const [userPick, setUserPick] = useState('');
  const [userImage, setUserImage] = useState();
  const [compPick, setCompPick] = useState({});
  const choices = [
    {
      choice: 'Rock',
      imagePath: rock
    },
    {
      choice: 'Paper',
      imagePath: paper
    },
    {
      choice: 'Scissors',
      imagePath: scissors
    },
    {
      choice: 'Lizard',
      imagePath: lizard
    },
    {
      choice: 'Spock',
      imagePath: spock
    }
  ];

  const setChoices = (choice, path) => {
    setUserPick(choice);
    setUserImage(path);
    setCompPick(choices[Math.floor(Math.random() * choices.length)]);
  }

  const navigateToResult = () => {
    navigation.navigate("Result", {
      compChoice: compPick,
      userChoice: userPick, 
      userImage: userImage
    });
      console.log('userPick: ' + userPick);
    console.log('compPick: ' + compPick);
    console.log('userImage' + userImage)

  }

  return (
    <InfoContainer>
      <InfoText>Click on your choice</InfoText>
      <ImagesContainer>
        <LinkImage onPress={() => setChoices('Rock', rock)}>
          <ChoiceImage
            source={rock}
          />
          <Text>Rock</Text>
        </LinkImage>
        <LinkImage onPress={() => setChoices('Paper', paper)}>
          <ChoiceImage
            source={paper}
          />
          <Text>Paper</Text>
        </LinkImage>
        <LinkImage onPress={() => setChoices('Scissors', scissors)}>
          <ChoiceImage
            source={scissors}
          />
          <Text>Scissors</Text>
        </LinkImage>
        <LinkImage onPress={() => setChoices('Lizard', lizard)}>
          <ChoiceImage
            source={lizard}
          />
          <Text>Lizard</Text>
        </LinkImage>
        <LinkImage onPress={() => setChoices('Spock', spock)}>
          <ChoiceImage
            source={spock}
          />
          <Text>Spock</Text>
        </LinkImage>
      </ImagesContainer>
      <LowerContainer>
        <Text>You picked: {userPick}</Text>
        <NextButton onPress={navigateToResult}>
          <ButtonText>Play</ButtonText>
        </NextButton>
      </LowerContainer>

    </InfoContainer>
  )
}

export default UserPickScreen;