import React from 'react';
import styled from 'styled-components/native';
import { Button } from "react-native";

const InfoText = styled.Text`
  font-size: 48px;
`;

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const ResultScreen = ({navigation}) => {
  const navigateToStart = () => {
    navigation.navigate("Start")
  }
  return (
    <InfoContainer>
      <InfoText>Show result!</InfoText>
      <Button title="Go back" onPress={navigateToStart} ></Button>
    </InfoContainer>

  )
    
  
}

export default ResultScreen;