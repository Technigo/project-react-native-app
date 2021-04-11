import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const NotificationsContainer = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: 40px;
  background-color:#f5d584;
`;

const TouchButton = styled.TouchableOpacity`
  background-color:#20c5cb;
  height: 100px;
  width: 100px;
  border-radius:100%;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
  color:#f5d584;
  text-align: center;
  font-size: 20px;
`
const InfoText = styled.Text`
  font-size: 20px;
`

export const KanyeWest = ({navigation}) => {
  
  const [kanyeWest, setKanyeWest] = useState ([])

  useEffect (() => {
    fetchKanyeWestList()
  },[])

  const fetchKanyeWestList = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => setKanyeWest(data.quote))
    .catch(err => console.error(err))
  }

  return (
    <NotificationsContainer>
      <View>
      <Image 
      source={{uri:'https://media.giphy.com/media/61VzGiRUQp3pZ8omne/giphy.gif'}}
      style={{width:200, height:200}}
      />
      </View>
      <InfoText>{kanyeWest}</InfoText>
      <TouchButton onPress={()=> navigation.navigate('HOME')}>
        <ButtonText>BACK</ButtonText>
      </TouchButton>
      
    </NotificationsContainer>
  );
};