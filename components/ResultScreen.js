import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from "react-native";

const InfoText = styled.Text`
  font-size: 48px;
`;

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const ResultScreen = ({navigation, route}) => {
  const navigateToStart = () => {
    navigation.navigate("Start")
  }
  return (
    <InfoContainer>
      <InfoText>Show result!</InfoText>
      <Button title="Play again!" onPress={navigateToStart} ></Button>
      <Text>{route.params.compChoice}</Text>
      <Text>{route.params.userChoice}</Text>
    </InfoContainer>

  )
    
  
}

export default ResultScreen;