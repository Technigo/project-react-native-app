import React, { useEffect } from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import mars from '../../assets/mars.jpg';

const HomeContainer = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const WelcomeText = styled.Text`
  font-size: 30px;
  color: white;
  width: 80%
  margin: 30px;
`

const HomeScreenButton = styled.TouchableOpacity`
  background-color: white;
  border: 2px solid white;
  border-radius: 8px;
  padding: 10px;
  color: black;
  width: 60%;
  text-align: center;
  margin: 30px;
`

const ButtonText = styled.Text` 
  font-size: 18px;
  text-align: center;
`


export const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  const toLatestReport = () => {
    navigation.navigate("LatestReport");
  };

  const toAbout = () => {
    navigation.navigate("About");
  }

  return (
    <HomeContainer source={mars}>
      <WelcomeText>
        Do you wonder what the weather is like on Mars?
      </WelcomeText>
      <HomeScreenButton
        onPress={toLatestReport}
      >
        <ButtonText>See latest report</ButtonText>
      </HomeScreenButton>
      <HomeScreenButton
        onPress={toAbout}
      >
        <ButtonText>Learn more</ButtonText>
      </HomeScreenButton>
    </HomeContainer>
  )
};
