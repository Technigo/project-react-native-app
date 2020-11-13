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

const GoButton = styled.TouchableOpacity`
  margin-top: 25px;
  background: #000000;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid #fff;
  width: 200px;
  height: 80px;
`;

const ButtonText = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
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
      <GoButton 
        
        onPress={navigateToInfo}>
          <ButtonText>Go!</ButtonText>
        </GoButton>
    </HomeContainer>
  );
};
export default HomeScreen;