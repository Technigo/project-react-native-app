import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native';

import { Container, OracleText, MagicImage, ButtonText, RestartButton } from '../StyledComponents/OracleMessageStyling';

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
      <Container>
        <OracleText>{message.advice}</OracleText>
        <MagicImage source={require('../assets/magic.png')}/>
        {Platform.OS !== 'web' && <LottieView source={require('../assets/confetti.json')} autoPlay/>}
        <RestartButton onPress={onRestartOracle}>
          <ButtonText>Restart Oracle 🔮</ButtonText>
        </RestartButton>
      </Container>
    </>
  );
};
//Platform dependency prevents lottie animations from crashing the web version.