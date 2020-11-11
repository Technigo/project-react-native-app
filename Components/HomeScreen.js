import React from 'react'

import { Container, Title, InfoText } from './HomeScreenStyling'
import LottieView from 'lottie-react-native'
import styled from 'styled-components/native'

export const HomeScreen = () => {
  return (
    <Container>
       <Title>POWER APP!</Title>
          <InfoText>
            Inspired by the book:"Nice girls don't get the corner office"
            comes this app where you can shuffle through daily challenges that will 
            help improve your carrer!
          </InfoText>           
    </Container> 
  )
}

//<LottieView source={require('./Animation/hand.json')} autoPlay/>




