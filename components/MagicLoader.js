import React from 'react';
import LottieView from 'lottie-react-native';

export const MagicLoader = () => {
  return (
    <LottieView
      style={{ height: 350, width: 350 }}
      source={require('../assets/magicLoader.json')}
      autoPlay
      loop
    />
  );
};
