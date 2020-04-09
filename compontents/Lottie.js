import React from 'react'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

const Container = styled.View`
  background-color: papayawhip;
`

const Lottie = () => {
  return (
    <Container>
      <LottieView
        source={require('../assets/animations/popit.json')}
        autoPlay
      />
    </Container>
  )
}

export default Lottie;