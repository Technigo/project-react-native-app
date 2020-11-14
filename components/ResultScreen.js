import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, View, Image } from "react-native";

const InfoText = styled.Text`
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px black;
  text-align: center;
  margin-top: 20px;
`;

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: #bbe5ed;
`;

const ResultImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const ResultContainer = styled.View`
  margin: 100px 0;
  flex-direction: row;
  align-items: center;
`;

const ChoiceContainer = styled.View`
  align-items: center;
  margin: 0 20px;
`;

const WinnerText = styled.Text`
  color: black;
  font-size: 28px;
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
      return 'You forgot to make a choice, try again!'
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
        <Text>vs</Text>
        <ChoiceContainer>
          <ResultImage source={route.params.compChoice.imagePath}></ResultImage>
          <Text>{route.params.compChoice.choice}</Text>
        </ChoiceContainer>
      </ResultContainer>
      <WinnerText>{winnerMessage()}</WinnerText>
      <NextButton onPress={navigateToStart} >
        <ButtonText>Play again</ButtonText>
      </NextButton>
    </InfoContainer>
  )
}

export default ResultScreen;