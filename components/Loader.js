import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native';

const Container = styled.View`
	flex: 1;
	/* background-color: blue; */
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 36px;
	color: red;
`

const Loader = () => {

  return (
      <>
        <Container>
          <Title>LOADING</Title>
          {/* <LottieView 
        source={require('../lotties/loader-animation')}
        autoPlay
        /> */}
        </Container>
      </>
  )
}

export default Loader
