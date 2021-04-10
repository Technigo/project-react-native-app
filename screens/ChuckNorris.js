import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { CHUCK_API } from '../reuseables/urls'

const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: black;
`;

const JokeText = styled.Text`
  color: yellow;
  font-family: Courier;
  font-weight: bold;
  font-size: 16px;
  padding: 0 30px 0 30px;
`;

const ImageGiph = styled.Image`
  width: 350px;
  height: 350px;
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
      <ImageGiph source={{uri: 'https://media.giphy.com/media/jSSUtHZB08yOJGDAd2/giphy.gif' }}/>
      <JokeText>{chuckNorris.value}</JokeText>
      <BackButton onPress={() => navigation.navigate('HOME')}>
        <ButtonText>BACK TO MENU</ButtonText>
      </BackButton>
    </NotificationsContainer>
  );
};

