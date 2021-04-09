import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styled, { ThemeConsumer } from 'styled-components/native';

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;


export const RandomAdvice = () => {
  
  const [randomAdvice, setRandomAdvice] = useState ([])

  useEffect (() => {
    fetchRandomAdviceList()
  },)

  const fetchRandomAdviceList = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setRandomAdvice(data.slip.advice))
    .catch(err => console.error(err)) 
  }



  return (
    <NotificationsContainer>
      <View>
      <Image 
      source={{uri:'https://media.giphy.com/media/jSSUtHZB08yOJGDAd2/source.gif'}}
      />
      </View>
      <Text>{randomAdvice}</Text>
    </NotificationsContainer>
  );
};