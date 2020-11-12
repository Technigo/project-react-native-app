import React from 'react';
import LottieView from 'react-native-web-lottie';
//import styled from 'styled-components';
import { View } from 'react-native';

import SortingHatAnimation from '../assets/animations/wingardium-leviosa.json';

const Lottie = () => {
  return (
    <View>
      <LottieView source={SortingHatAnimation} autoPlay loop />
    </View>
  );
};

export default Lottie;

// const Container = styled.View`
// flex = 1;
// background-color = burgundy;
// justify-content: center;
// align-items: center;
// `;
