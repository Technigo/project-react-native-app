import React from "react"
import LottieView from "lottie-react-native"
import styled from "styled-components/native"

const Container = styled.View`
  background-color: #3491cd;
`

const Lottie = () => {
  return (
    <Container>
      <LottieView
        source={require('../assets/doganimation.json')}
        autoPlay
        style={{ width: 300, height: 300}}
      />
    </Container>
  )
}

export default Lottie