import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';

import { View } from 'react-native';
import { OracleText, MagicImage, ButtonText, RestartButton } from './OracleMessageStyling';


export const OracleMessage = ({onRestartOracle}) => { 

  const [message, setMessage] = useState({});

  useEffect (()=> { 
    fetch('https://api.adviceslip.com/advice')
      .then (response => response.json())
      .then ((json) => { 
        setMessage(json.slip) 
      });
  },[]);

  return (
    <>
      <View>
        <OracleText>{message.advice}</OracleText>
        <MagicImage
         source={require('../assets/magic.png')}
         />
         <LottieView 
          source={require('../assets/confetti.json')}
          autoPlay
          />
      </View>
      <RestartButton onPress={onRestartOracle}>
        <ButtonText>Restart Oracle</ButtonText>
      </RestartButton>
    </>
  );
};