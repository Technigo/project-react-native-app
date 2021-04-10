import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { YES_NO_API } from '../reuseables/urls'

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: black;
`;

const ImageGiph = styled.Image`
  width: 350px;
  height: 350px;
`;

const AnswerText = styled.Text`
  color: yellow;
  font-family: Courier;
  font-weight: bold;
  font-size: 35px;
  margin: 20px 0 20px 0;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 550px;
  border: 2px solid white;
  border-radius: 25px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  padding: 15px;
  font-weight: bold;
`;

export const Answer = ({ navigation }) => {

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
      <ImageGiph source={{uri: 'https://media.giphy.com/media/l2JJu8U8SoHhQEnoQ/giphy.gif' }}/>
      <AnswerText>{Answer.toLocaleUpperCase()}</AnswerText>
      <BackButton onPress={() => navigation.navigate('HOME')}>
        <ButtonText>BACK TO MENU</ButtonText>
      </BackButton>
    </NotificationsContainer>
  );
};