import React from 'react';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native';

import { Container, AnimationContainer,OracleImage, StartText } from '../StyledComponents/StartScreenStyling';

export const StartScreen = () => { 
  return (
      <Container>
        <AnimationContainer>
          {Platform.OS !== 'web' && <LottieView source={require('../assets/star.json')} autoPlay/>}
        </AnimationContainer>
        <OracleImage source={require('../assets/fortune-teller.png')}/>
        <StartText>Shake me to get your Magic Oracle!✨</StartText>
      </Container>
  );
};

//Platform dependency prevents lottie animations from crashing the web version.