import React from 'react';
import styled from 'styled-components/native';
import background from '../assets/RPSLS.png';

import { Button, Image, View, TouchableOpacity, Text } from "react-native";

const HomeText = styled.Text`
  font-size: 48px;
`;

const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const StartImage = styled.Image`
  height: 250px;
  width: 250px;
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

const StartScreen = ({navigation}) => {
  const navigateToUserPick = () => {
    navigation.navigate("UserPick")
  }
  return (
    <HomeContainer>
      <HomeText>Lets play!</HomeText>
      <Text>Rock, Paper, Scissors, Lizard, Spock</Text>
      <StartImage source={background}></StartImage>
      <NextButton onPress={navigateToUserPick} >
        <ButtonText>Start</ButtonText>
      </NextButton>
    </HomeContainer>
  )
}

export default StartScreen;