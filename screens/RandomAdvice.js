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
  word-wrap:break-word;
  background-color:#e68577;
`;

const TouchButton = styled(TouchableOpacity)`
  background-color:#7f8b7c;
  height: 100px;
  width: 100px;
  border-radius:100%;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled(Text)`
  color:#e68577;
  text-align: center;
  font-size: 20px;
`
const InfoText = styled(Text)`
  font-size: 20px;
`

export const RandomAdvice = ({navigation}) => {
  
  const [randomAdvice, setRandomAdvice] = useState ([])

  useEffect (() => {
    fetchRandomAdviceList()
  },)

  const fetchRandomAdviceList = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setRandomAdvice(data.slip.advice))
    .catch(err => console.error(err)) 
  }



  return (
    <NotificationsContainer>
      <View>
      <Image 
      source={{uri:'https://media.giphy.com/media/4WFFDZOOvt6GOQgvNb/giphy.gif'}}
      style={{width:200, height:200}}
      />
      </View>
      <InfoText>{randomAdvice}</InfoText>
      <TouchButton onPress={()=> navigation.navigate('HOME')}>
        <ButtonText>GO HOME</ButtonText>
      </TouchButton>
    </NotificationsContainer>
  );
};