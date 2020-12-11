import React from 'react'
import LottieView from 'lottie-react-native'

import { Container, Title, InfoText } from './HomeScreenStyling'

export const HomeScreen = () => {
  return (
    <Container>
       <Title>POWER APP!</Title>
          <InfoText>
            Inspired by the book "Nice girls don't get the corner office"
            comes this app where you can shuffle through daily challenges that could
            help improve your carrer!
          </InfoText>  
          <LottieView source={require('./Animation/hand.json')} autoPlay />          
    </Container> 
  )
}

/* Use this line to check out the project from computer */
//import LottieView from 'react-native-web-lottie'





