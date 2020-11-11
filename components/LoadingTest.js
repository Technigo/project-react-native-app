import React from 'react';
// import LottieView from 'lottie-react-native';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

// ----------------------------------------------------------------

const Loading = ({ navigation }) => {
  const LoadingText = styled.Text`
    font-size: 32px;
    text-align: center;
  `;

  return (
    // <LoadingText>Loading...</LoadingText>
    <View>
      <LottieView
        source={require('../assets/38290-loading-51-monoplane.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;
