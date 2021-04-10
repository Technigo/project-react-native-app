import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { CHUCK_API } from '../reuseables/urls'

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ChuckNorris = ({ navigation }) => {

  const [chuckNorris, setChuckNorris] = useState('')

  useEffect(() => {
    fetchChuckNorrisJoke()
  }, [])

  const fetchChuckNorrisJoke = () => {
    fetch(CHUCK_API)
      .then(res => res.json())
      .then(value => setChuckNorris(value))
      .catch(err => console.error(err))
  }

  return (
    <NotificationsContainer>
      <Image 
        source={{uri: 'https://media.giphy.com/media/jSSUtHZB08yOJGDAd2/giphy.gif' }} 
        style={{width: 400, height: 400}}  
      />
      <Text>{chuckNorris.value}</Text>
      {/* <Button title="BACK TO MENU" onPress={() => navigation.navigate('HOME')} /> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('HOME')}
      >
        <Text>BACK TO MENU</Text>
      </TouchableOpacity>
    </NotificationsContainer>
  );
};

