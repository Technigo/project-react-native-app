import React from 'react';
// to make Lottie work on web
import LottieView from 'react-native-web-lottie';
// to make Lottie work on mobile
//import LottieView from 'lottie-react-native';

import { LottieContainer } from '../styled-components/styles';
import LoadingAnimation from '../assets/animations/loader.json';

const Lottie = () => {
  return (
    <LottieContainer>
      <LottieView source={LoadingAnimation} autoPlay loop />
    </LottieContainer>
  );
};

export default Lottie;
