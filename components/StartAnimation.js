import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native';

import bigFox from '../assets/big-fox.png'

const LoadingContainer = styled.View`
  width: 250px;
  height: 250px;
  align-items: center;
  justify-content: center;
`;

const StandardImage = styled.Image`
  width: 240px;
  height: 240px;
  border-radius: 25px;
`

const StartAnimation = () => {
  return (
    <LoadingContainer>
      {Platform.OS !== 'web' && <LottieView
        style={{ width: 250, height: 250 }}
        autoPlay
        loop
        source={require('../assets/24969-sleepy-fox.json')}
      />
      }
      {Platform.OS === 'web' && <StandardImage resizeMode='cover' source={bigFox}></StandardImage>}
    </LoadingContainer>
  );
};

export default StartAnimation;