import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import styled, { ThemeConsumer } from 'styled-components/native';

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;


export const DadJoke = ({navigation}) => {
  
  const [dadJoke, setDadJoke] = useState ([])

  useEffect (() => {
    fetchDadJokeList()
  },[])

  const fetchDadJokeList = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => setDadJoke(data.quote))
    .catch(err => console.error(err))
  }


  return (
    <NotificationsContainer>
      <View>
      <Image 
      source={{uri:'https://media.giphy.com/media/jSSUtHZB08yOJGDAd2/source.gif'}}
      />
      </View>
      <Text>{dadJoke}</Text>
      <Button
      title="Go Home"
      onPress={() => 
        navigation.navigate('Feed')
      }
    />
      {/* < TouchableOpacity title='Feed'onPress={()=> navigation.navigate('Feed')}>Home</TouchableOpacity> */}
    </NotificationsContainer>

    
  );
};