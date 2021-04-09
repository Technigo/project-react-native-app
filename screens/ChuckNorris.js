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


export const ChuckNorris = () => {
  
  const [chuckNorris, setChuckNorris] = useState ('')

  useEffect (() => {
    fetchChuckNorrisList()
  }, [])

  const fetchChuckNorrisList = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(value => setChuckNorris(value))
    .catch(err => console.error(err))
  }



  return (
    <NotificationsContainer>
      <View>
      <Image 
      source={{uri:'https://media.giphy.com/media/jSSUtHZB08yOJGDAd2/source.gif'}}
      style={{width:400, height:400}}
      />
      </View>
      <Text>{chuckNorris.value}</Text>
    </NotificationsContainer>
  );
};
