import React from 'react';
import styled from 'styled-components';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Quotes from './Quotes';
import ShakeApi from './ShakeApi';

const StartWrapper = styled.View`
  flex: 1;
  background-color: rgb(255, 227, 239);
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const StartText = styled.Text`
  font-size: 25px;
  text-align: center;
`;

const ImageLogo = styled.Image`
  width: 300;
  height: 150;
`;

const StartQuote = styled.TouchableOpacity`
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  border-radius: 20px;
  background-color: rgb(255, 199, 223);
`;

const ButtonText = styled.Text`
  font-size: 20px;
  padding: 13px;
`;

const StartPage = ({ navigation }) => {
  const navigateToShake = () => {
    navigation.navigate('ShakeSensor');
  };

  return (
    <StartWrapper>
      <ImageLogo source={require('../assets/friends.png')} />
      <StartText>
        Friends fan? Push the button to make your day better!
      </StartText>
      <StartQuote onPress={() => navigateToShake()}>
        <ButtonText>Give me a quote!</ButtonText>
      </StartQuote>
    </StartWrapper>
  );
};

export default StartPage;
