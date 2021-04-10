import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

import { YES_NO_API } from '../reuseables/urls'

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Answer = () => {

  const [Answer, setAnswer] = useState('')

  useEffect(() => {
    fetchAnswers()
  }, [])

  const fetchAnswers = () => {
    fetch(YES_NO_API)
      .then(res => res.json())
      .then(data => setAnswer(data.answer))
      .catch(err => console.error(err))
  }

  return (
    <NotificationsContainer>
      {/* <View>
      <Image source={{uri: }}/>
      </View> */}
      <Text>{Answer}</Text>
    </NotificationsContainer>
  );
};