import React, { useState } from 'react'
import { View, Button, Text } from 'react-native';
import {Title, IntroText, Screen, ResultText } from './StartScreenStyling';
import styled from 'styled-components/native'


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
    <Container>
        <Title>DAILY EMPOWERMENT CHALLENGES</Title>
        <IntroText> Click on the button to get a challenge that you will focus on today!</IntroText>
          <Button
            onPress={onClick}
            title="Change Challenge"
            color="blue">
           </Button>
          <ResultText>{random, challengeArray[random]}</ResultText>
    </Container>
  )
};

const Container = styled.View`
  padding-top: 12px;
  background-color: papayawhip;
  height:100%;
  text-align:center;
`;
