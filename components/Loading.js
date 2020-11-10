import React from 'react';
// import LottieView from 'lottie-react-native';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// ----------------------------------------------------------------

const Loading = () => {
  const LoadingText = styled.Text`
    font-size: 32px;
    text-align: center;
    margin: 50px;
  `;

  return (
    <LoadingText>Loading...</LoadingText>

    // <LottieView
    //   source={require('../assets/38290-loading-51-monoplane.json')}
    //   autoPlay
    //   loop
    // />
  );
};

export default Loading;
