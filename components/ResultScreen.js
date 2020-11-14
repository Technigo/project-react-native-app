import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, View, Image } from "react-native";

const InfoText = styled.Text`
  font-size: 48px;
`;

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: lightblue;
`;

const ResultImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const ResultContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ChoiceContainer = styled.View`
  align-items: center;
`;

const NextButton = styled.TouchableOpacity`
  height: 70px;
  width: 90%;
  background: white;
  color: black;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 50px;
`;

const ButtonText = styled.Text`
  font-size: 30px;
`;


const ResultScreen = ({navigation, route}) => {
  const navigateToStart = () => {
    navigation.navigate("Start")
  }

  const winnerMessage = () => {
    if (route.params.userChoice === route.params.compChoice.choice) {
      return "It's a tie, try again!"
    } else if (route.params.userChoice === 'Rock') {
      if (route.params.compChoice.choice === 'Scissors' || route.params.compChoice.choice === 'Lizard') {
        return 'You win!'
      } else {
        return 'Computer wins!'
      }
    } else if (route.params.userChoice === 'Paper') {
      if (route.params.compChoice.choice === 'Rock' || route.params.compChoice.choice === 'Spock') {
        return 'You win!'
      } else {
        return 'Computer wins!'
      }
    } else if (route.params.userChoice === 'Scissors') {
      if (route.params.compChoice.choice === 'Paper' || route.params.compChoice.choice === 'Lizard') {
        return 'You win!'
      } else {
        return 'Computer wins!'
      }
    } else if (route.params.userChoice === 'Lizard') {
      if (route.params.compChoice.choice === 'Paper' || route.params.compChoice.choice === 'Spock') {
        return 'You win!'
      } else {
        return 'Computer wins!'
      }
    } else if (route.params.userChoice === 'Spock') {
      if (route.params.compChoice.choice === 'Rock' || route.params.compChoice.choice === 'Scissors') {
        return 'You win!'
      } else {
        return 'Computer wins!'
      }
    } else {
      return 'You forget to make a choice, try again!'
    }

  }
  return (
    <InfoContainer>
      <InfoText>Result</InfoText>
      <ResultContainer>
        <ChoiceContainer>
          <ResultImage source={route.params.userImage}></ResultImage>
          <Text>{route.params.userChoice}</Text>
        </ChoiceContainer>
        <Text>VS</Text>
        <ChoiceContainer>
          <ResultImage source={route.params.compChoice.imagePath}></ResultImage>
          <Text>{route.params.compChoice.choice}</Text>
        </ChoiceContainer>


      </ResultContainer>
      <Text>{winnerMessage()}</Text>
      <NextButton onPress={navigateToStart} >
        <ButtonText>Play again!</ButtonText>
      </NextButton>

    </InfoContainer>
  )
}

export default ResultScreen;