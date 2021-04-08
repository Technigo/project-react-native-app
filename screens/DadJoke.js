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


export const DadJoke = () => {
  
  const [dadJoke, setDadJoke] = useState ('')

  useEffect (() => {
    fetchDadJokeList()
  }, [])

  const fetchDadJokeList = () => {
    fetch('https://icanhazdadjoke.com/api')
    .then(res => res.json())
    .then(joke => setDadJoke(joke))
    .catch(err => console.error(err))
  }



  return (
    <NotificationsContainer>
      <View>
      <Image 
      source={{uri:'https://media.giphy.com/media/jSSUtHZB08yOJGDAd2/source.gif'}}
      />
      </View>
      <Text>{dadJoke.joke}</Text>
    </NotificationsContainer>
  );
};