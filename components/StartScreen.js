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
  background: lightblue;
`;

const StartImage = styled.Image`
  height: 250px;
  width: 250px;
  margin-top: 50px;
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

const StartScreen = ({navigation}) => {
  const navigateToUserPick = () => {
    navigation.navigate("UserPick")
  }
  return (
    <HomeContainer>
      <HomeText>Let's play!</HomeText>
      <Text>Rock, Paper, Scissors, Lizard, Spock</Text>
      <StartImage source={background}></StartImage>
      <NextButton onPress={navigateToUserPick} >
        <ButtonText>START</ButtonText>
      </NextButton>
    </HomeContainer>
  )
}

export default StartScreen;