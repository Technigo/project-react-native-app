import React from 'react';
import { View } from 'react-native';
import {OracleImage, StartText} from './StartScreenStyling';

export const StartScreen = () => { 
  return (
    <View> 
      <OracleImage
        source={require('../assets/fortune-teller.png')}
      />
      <StartText>Shake me to get your Magic Oracle!✨</StartText>
    </View>
  )
};