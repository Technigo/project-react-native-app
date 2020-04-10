import React from 'react'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
`

export const Lottie = () => {
  return (
    <Container>
      <LottieView
        source={require('../assets/animations/bat.json')}
        autoPlay
      />
    </Container>
  )
}