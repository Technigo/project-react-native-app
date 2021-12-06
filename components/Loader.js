import React from 'react';

import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

const Loader = () => {
  const loading = useSelector((store) => store.loader.loading);

  return (
    loading && (
      <LottieView
        style={{ width: 200, height: 200 }}
        source={require('../assets/animation.json')}
      />
    )
  );
};

export default Loader;
