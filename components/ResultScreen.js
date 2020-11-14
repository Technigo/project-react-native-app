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
`;

const ResultImage = styled.Image`
  width: 100px;
  height: 100px;
`;
const ResultScreen = ({navigation, route}) => {
  const navigateToStart = () => {
    navigation.navigate("Start")
  }
  return (
    <InfoContainer>
      <InfoText>Show result!</InfoText>
      <View>
        <ResultImage source={route.params.compChoice.imagePath}></ResultImage>
        <ResultImage source={route.params.userImage}></ResultImage>

      </View>
      <Button title="Play again!" onPress={navigateToStart} ></Button>
      <Text>{route.params.compChoice.choice}</Text>
      <Text>{route.params.userChoice}</Text>
    </InfoContainer>
  )
}

export default ResultScreen;