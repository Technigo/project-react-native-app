import React from 'react';
import { View } from 'react-native';
import {Title, IntroText} from './StartScreenStyling';

export const StartScreen = () => { 
  return (
    <View> 
      <Title>DAILY EMPOWERMENT CHALLENGES</Title>
      <IntroText> Inspired by the book:"Nice girls don't get the corner office" </IntroText>
    </View>
  )
};