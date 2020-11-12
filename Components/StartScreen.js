import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import { OracleImage, StartText } from './StartScreenStyling';
import {AnimationContainer} from './AnimationContainer';

export const StartScreen = () => { 
  return (
      <View> 
        <AnimationContainer>
          <LottieView source={require('../assets/star.json')} autoPlay/>
        </AnimationContainer>
        <OracleImage source={require('../assets/fortune-teller.png')}/>
        <StartText>Shake me to get your Magic Oracle!✨</StartText>
      </View>
  );
};
/* Use the following line to be able to run the project as a web version */
//import LottieView from 'react-native-web-lottie'