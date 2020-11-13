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

const LatesReportButton = styled.TouchableOpacity`
  background-color: white;
  border: 2px solid white;
  border-radius: 8px;
  padding: 10px;
  color: black;
  width: 50%;
  text-align: center;
  margin: 30px;
`

const ButtonText = styled.Text` 
  font-size: 18px;
`


export const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  const toLatestReport = () => {
    navigation.navigate("LatestReport");
  };

  return (
    <HomeContainer source={mars}>
      <WelcomeText>
        Wonder how the weather looks like on Mars?
      </WelcomeText>
      <LatesReportButton
        onPress={toLatestReport}
      >
        <ButtonText>Get the latest report from Elysium Planitia</ButtonText>
      </LatesReportButton>
    </HomeContainer>
  )
};
