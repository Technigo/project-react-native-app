import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';
import lizard from '../assets/lizard.png';
import spock from '../assets/spock.png';

// STYLED COMPONENTS

const InfoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #bbe5ed;
`;

const InfoText = styled.Text`
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px black;
  text-align: center;
  margin-top: 20px;
`;

const ImagesContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const LinkImage = styled.TouchableOpacity`
  height: 120px;
  width: 100px;
  justify-content: center;
  align-items: center;
`;

const ChoiceImage = styled.Image`
  height: 50px;
  width: 50px;
`;

const LowerContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.TouchableOpacity`
  height: 70px;
  width: 90%;
  background: #3e92cc;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 40px;
`;

const ButtonText = styled.Text`
  font-size: 25px;
  color: white;
`;

const UserPickScreen = ({ navigation }) => {
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

  // Function to set all the states with picked choices
  const setChoices = (choice, path) => {
    setUserPick(choice);
    setUserImage(path);
    // Randomizes a choice for the computer from the choices array
    setCompPick(choices[Math.floor(Math.random() * choices.length)]);
  }

  // Navigates to the next page and sends props
  const navigateToResult = () => {
    navigation.navigate("Result", {
      compChoice: compPick,
      userChoice: userPick, 
      userImage: userImage
    });
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