import React, { useEffect } from "react"
import { Button } from 'react-native'

//import { Text } from 'react-native';
import styled from "styled-components/native"
import backgroundPicture from '../assets/stars-bg-1.jpg'

const HomeContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const HomeText = styled.Text`
  color: #ffffff;
  font-size:48px; 
`;

const HomeScreen = ({navigation}) => {
  useEffect (() => {
    navigation.setOptions({ headerShown:false });
  }, []);
  
  const navigateToInfo = () => {
    console.log('Info button pressed');
    navigation.navigate('Info', {date: "Some string sent from HomeScreen"});
  }
  return (
    <HomeContainer source={backgroundPicture}>
      <HomeText>Take me to space!</HomeText>
      <Button title="Info" onPress={navigateToInfo}></Button>
    </HomeContainer>
  );
};

export default HomeScreen;