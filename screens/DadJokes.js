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

export const DadJoke = () => {

  const [dadJoke, setDadJoke] = useState('')

  useEffect(() => {
    fetchDadJokes()
  }, [])

  const fetchDadJokes = () => {
    fetch('https://icanhazdadjoke.com/')
      .then(res => res.json())
      .then(joke => setDadJoke(joke))
      .catch(err => console.error(err))
  }

  return (
    <NotificationsContainer>
      {/* <View>
      <Image source={{uri: }}/>
      </View> */}
      <Text>{dadJoke.joke}</Text>
    </NotificationsContainer>
  );
};