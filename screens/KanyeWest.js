import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled, { ThemeConsumer } from 'styled-components/native';

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: 40px;
  //word-wrap:break-word;
`;

const TouchButton = styled(TouchableOpacity)`
  background-color: red;
`
const ButtonText = styled(Text)`
  color: blue;
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
      source={{uri:'https://media.giphy.com/media/H1ki8HAyAhf6kJ6cic/giphy.gif'}}
      style={{width:200, height:200}}
      />
      </View>
      <Text>{kanyeWest}</Text>
      <TouchButton onPress={()=> navigation.navigate('HOME')}>
        <ButtonText>GO HOME</ButtonText>
      </TouchButton>
      
    </NotificationsContainer>

  
  );

  
};