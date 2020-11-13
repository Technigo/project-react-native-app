import React, { useEffect } from "react"
import { Button } from 'react-native'
//import { Text } from 'react-native';
import styled from "styled-components/native"

import backgroundPicture from '../assets/stars-bg-1.jpg'
import { AnimationEarth } from './AnimationEarth'

const HomeContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const HomeText = styled.Text`
  color: #ffffff;
  font-size:48px;
  text-align: center;
  margin-bottom: 15px; 
`;

const HomeScreen = ({navigation}) => {
  useEffect (() => {
    navigation.setOptions({ headerShown:false }); //This hides the default(?) header on home screen
  }, []);
  
  //what does navigation.navigate('Info') do? What is 'Info' referring to here?
  const navigateToInfo = () => {
    console.log('Info button pressed');
    navigation.navigate('Back'); //What is 'Info'? Why can't I change it?
  }
  //How do I change the button into a Touchable opacity?
  return (
    <HomeContainer source={backgroundPicture}>
      <HomeText>Discover the Cosmos!</HomeText>
      <AnimationEarth />
      <Button 
        title="Go!" 
        onPress={navigateToInfo}></Button>
    </HomeContainer>
  );
};
export default HomeScreen;