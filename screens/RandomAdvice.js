import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const RandomAdvice = () => {

  const [randomAdvice, setRandomAdvice] = useState('')

  useEffect(() => {
    fetchRandomAdvices()
  }, [])

  const fetchRandomAdvices = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(advice => setRandomAdvice(advice))
      .catch(err => console.error(err))
  }

  return (
    <NotificationsContainer>
      {/* <View>
      <Image source={{uri: }}/>
      </View> */}
      <Text>{randomAdvice.advice}</Text>
    </NotificationsContainer>
  );
};