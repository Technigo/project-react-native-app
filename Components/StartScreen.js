import React, { useState } from 'react'
import { View, Button, Text } from 'react-native';
import {Title, IntroText, Screen, ResultText } from './StartScreenStyling';


export const StartScreen = () => { 
  const [challenge, setChallenge] = useState('');
  const onClick = (event) => {
    event.preventDefault()
      setChallenge(challengeArray)
      console.log(challenge)
  }
  
  let challengeArray = 
  [
   'Do not apologize today!',
   'Be bold! take place in meeting!', 
   'Do not offer to do meaningless shores!',
   'Practice saying NO!', 
  ]

  const random = Math.floor(Math.random() * challengeArray.length);
  console.log(random, challengeArray[random]);

  return (
    <View> 
      <Screen>
        <Title>DAILY EMPOWERMENT CHALLENGES</Title>
        <IntroText> Inspired by the book:"Nice girls don't get the corner office" </IntroText>
          <Button
            onPress={onClick}
            title="Change Challenge"
            color="blue">
           </Button>
          <ResultText>{random, challengeArray[random]}</ResultText>
      </Screen>
    </View>
  )
};