import React from 'react';
import styled from 'styled-components/native';
import background from '../assets/RPSLS.png';

import { Button, Image, View, TouchableOpacity, Text } from "react-native";

const HomeTitleText = styled.Text`
  font-size: 48px;
  color: white;
  text-shadow: 2px 2px black;
`;

const HomeText = styled.Text`
  font-style: italic;
  margin-top: 10px;
`;

const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: #bbe5ed;
`;

const StartImage = styled.Image`
  height: 275px;
  width: 275px;
  margin-top: 30px;
`;

const NextButton = styled.TouchableOpacity`
  height: 70px;
  width: 90%;
  background: #3e92cc;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 50px;
`;

const ButtonText = styled.Text`
  font-size: 25px;
  color: white;
`;

const StartScreen = ({navigation}) => {
  const navigateToUserPick = () => {
    navigation.navigate("UserPick")
  }
  return (
    <HomeContainer>
      <HomeTitleText>Let's play!</HomeTitleText>
      <HomeText>Rock, Paper, Scissors, Lizard, Spock</HomeText>
      <StartImage source={background}></StartImage>
      <NextButton onPress={navigateToUserPick} >
        <ButtonText>Start game</ButtonText>
      </NextButton>
    </HomeContainer>
  )
}

export default StartScreen;