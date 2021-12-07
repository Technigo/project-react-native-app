import React from 'react';
import LottieView from 'lottie-react-native';

export const QuoteLoader = () => {
  return (
    <LottieView
      style={{ height: 350, width: 350 }}
      source={require('../assets/quoteLoader.json')}
      autoPlay
      loop
    />
  );
};
