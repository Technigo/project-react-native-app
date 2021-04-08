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

export const ChuckNorris = () => {

  const [chuckNorris, setChuckNorris] = useState('')

  useEffect(() => {
    fetchChuckNorrisJoke()
  }, [])

  const fetchChuckNorrisJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(value => setChuckNorris(value))
      .catch(err => console.error(err))
  }

  return (
    <NotificationsContainer>
      {/* <View>
      <Image source={{uri: }}/>
      </View> */}
      <Text>{chuckNorris.value}</Text>
    </NotificationsContainer>
  );
};
