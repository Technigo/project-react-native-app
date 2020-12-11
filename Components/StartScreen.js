import React, { useState } from 'react'

import { Container, Title, ResultText, ChallengeButton, ButtonText } from './StartScreenStyling'

export const StartScreen = () => { 
  const [challenge, setChallenge] = useState('')

  const onClick = (event) => {
    event.preventDefault()
      setChallenge(challengeArray)
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
   'Brag about yourself today!', 
  ]

  const random = Math.floor(Math.random() * challengeArray.length)

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
