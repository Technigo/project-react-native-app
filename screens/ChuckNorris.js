import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

const NotificationsContainer = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding:40px;
  word-wrap:break-word;
  background-color:#20c5cb;
`;

const TouchButton = styled.TouchableOpacity`
  background-color:#e68577;
  height: 100px;
  width: 100px;
  border-radius:100%;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
  color:#20c5cb;
  text-align: center;
  font-size: 20px;
`
const InfoText = styled.Text`
  font-size: 20px;
`

export const ChuckNorris = ({navigation}) => {
  
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
      style={{width:300, height:300}}
      />
      </View>
      <InfoText>{chuckNorris.value}</InfoText>
      <TouchButton onPress={()=> navigation.navigate('HOME')}>
        <ButtonText>BACK</ButtonText>
      </TouchButton>
    </NotificationsContainer>
  );
};
