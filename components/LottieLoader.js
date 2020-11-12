import React from 'react';
import LottieView from 'react-native-web-lottie';
import { View } from 'react-native';
import styled from 'styled-components/native';

import LoadingAnimation from '../assets/animations/loader.json';

const Lottie = () => {
  return (
    <Container>
      <LottieView source={LoadingAnimation} autoPlay loop />
    </Container>
  );
};

export default Lottie;

const Container = styled.View`
  flex: 1;
  background-color: darkred;
  justify-content: center;
  align-items: center;
`;
