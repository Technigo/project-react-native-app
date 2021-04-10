import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { ADVICE_API } from '../reuseables/urls'

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const RandomAdvice = ({ navigation }) => {

  const [randomAdvice, setRandomAdvice] = useState([])

  useEffect(() => {
    fetchRandomAdvices()
  }, [])

  const fetchRandomAdvices = () => {
    fetch(ADVICE_API)
      .then(res => res.json())
      .then(data => setRandomAdvice(data.slip.advice))
      .catch(err => console.error(err))
  }

  return (
    <NotificationsContainer>
      {/* <View>
      <Image source={{uri: }}/>
      </View> */}
      <Text>{randomAdvice}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('HOME')}
      >
        <Text>BACK TO MENU</Text>
      </TouchableOpacity>
    </NotificationsContainer>
  );
};