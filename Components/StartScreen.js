import React, { useState } from 'react'

import styled from 'styled-components/native'
import { Container, Title, ResultText, ChallengeButton, ButtonText } from './StartScreenStyling';


// try to use useEffect on the button 
  //useEffect(() => {
   // onClick or the random? 

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
   'Be bold! take extra place in a meeting!', 
   'Do not offer to do meaningless shores!',
   'Practice saying NO!', 
   'Do not say "I am sorry" today!',
   'Do not work overtime!',
   'Ask a colleague out for lunch!', 
   'Do not take the blame for someone elses mistake!',
   'You do not need everybody to like you!', 
   'Take more breaks then you usually do and mingle with colleagues!', 
   'Tell a colleuge something you have done well latley!', 
   'Brag about yourself today', 
  ]

  const random = Math.floor(Math.random() * challengeArray.length);
  console.log(random, challengeArray[random]);

  return (
    <Container>
      <Title>DAILY EMPOWERMENT CHALLENGES</Title> 
        <ChallengeButton onPress={onClick}>
          <ButtonText>CHANGE CHALLENGE</ButtonText>
        </ChallengeButton>
          <ResultText>{random, challengeArray[random]}</ResultText>  
    </Container>
  )
}

//expo install react-native-reanimated
