import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { ADVICE_API } from '../reuseables/urls'

const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: black;
`;

const ImageGiph = styled.Image`
  width: 280px;
  height: 280px;
`;

const AdviceText = styled.Text`
  color: yellow;
  font-family: Courier;
  font-weight: bold;
  font-size: 18px;
  padding: 0 30px 40px 30px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 550px;
  border: 2px solid white;
  border-radius: 25px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  padding: 15px;
  font-weight: bold;
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
      <AdviceText>{randomAdvice}</AdviceText>
      <ImageGiph source={{uri: 'https://media.giphy.com/media/zzHkw1tUJaGBy/giphy.gif' }}/>
      <BackButton onPress={() => navigation.navigate('HOME')}>
        <ButtonText>BACK TO MENU</ButtonText>
      </BackButton>
    </NotificationsContainer>
  );
};