import React from 'react';
import styled from 'styled-components';
import { useFonts, Caveat_400Regular } from '@expo-google-fonts/caveat';

const StartWrapper = styled.View`
  flex: 1;
  background-color: rgb(219, 218, 213);
  justify-content: center;
  align-items: center;
  margin: 0px;
`;

const StartText = styled.Text`
  font-size: 25px;
  text-align: center;
  margin: 10px;
`;

const ImageLogo = styled.Image`
  width: 300;
  height: 150;
`;

const StartQuote = styled.TouchableOpacity`
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  border-radius: 20px;
  background-color: rgb(255, 199, 223);
`;

const ButtonText = styled.Text`
  font-size: 25px;
  padding: 13px;
`;

const StartPage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
  });
  const navigateToShake = () => {
    navigation.navigate('Quotes');
  };

  return (
    <StartWrapper>
      <ImageLogo source={require('../assets/friends.png')} />
      <StartText style={{ fontFamily: 'Caveat_400Regular' }}>
        Are you a fan of Friends? And maybe want to get back to that real 90's
        feeling?
      </StartText>
      <StartQuote onPress={() => navigateToShake()}>
        <ButtonText style={{ fontFamily: 'Caveat_400Regular' }}>
          Let's go!
        </ButtonText>
      </StartQuote>
    </StartWrapper>
  );
};

export default StartPage;
