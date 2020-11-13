import React from 'react';
import styled from 'styled-components/native';
import background from '../assets/RPSLS.png';

import { Button } from "react-native";

const HomeText = styled.Text`
  font-size: 48px;
`;

const HomeContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const StartScreen = ({navigation}) => {
  const navigateToUserPick = () => {
    navigation.navigate("UserPick")
  }
  return (
    <HomeContainer source={background}>
      <HomeText> Welcome to startscreen!</HomeText>
      <Button title="USerPick" onPress={navigateToUserPick} ></Button>
    </HomeContainer>

  )
    
  
}

export default StartScreen;