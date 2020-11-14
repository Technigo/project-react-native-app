import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native'
import {  View, Button, Text, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import backgroundImage from '../assets/banana.png';


const HomeContainer = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 18px;
`;

const HomeText = styled.Text`
    font-size: 30px;
`;


const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      });
  
    const navigateToDetails = () => {
        navigation.navigate('Details' , {name: 'Daily Horoscope'});
    };


    return  (
        <HomeContainer source={backgroundImage}>
        <HomeText>Clean slate</HomeText>
        <AntDesign name="infocirlceo" size={50} color="black" />
        <Button
        title="Details"
        onPress={navigateToDetails}>
        </Button>
        </HomeContainer>
    );
};

export default HomeScreen;