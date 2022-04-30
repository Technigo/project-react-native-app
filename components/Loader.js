import React from 'react'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

//--------- Local styles ---------
const Container = styled.View`
	flex: 1;
	background-color: #e63946;
`
//--------------------------------

const Loader = () => {

  return (
    <>
      <Container>
        <LottieView
          source={require('../lotties/loader-animation')}
          speed={3}
          autoPlay
        />
      </Container>
    </>
  )
}

export default Loader
