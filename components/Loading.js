import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

// // External
// import LottieView from 'react-native-web-lottie';

// // Components
// import Animation from '../assets/38290-loading-51-monoplane.json';

// ----------------------------------------------------------------

const LoadingTest = ({ navigation }) => {
  const LoadingText = styled.Text`
    font-size: 32px;
    text-align: center;
  `;

  return (
    // <LottieView source={Animation} autoPlay loop />
    <LoadingText>Loading...</LoadingText>
  );
};

export default LoadingTest;
