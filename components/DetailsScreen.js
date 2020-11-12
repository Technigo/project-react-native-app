import React, { useEffect } from 'react';
import styled from 'styled-components/native'
import {  Button, Text, ImageBackground } from 'react-native';

import backgroundImage from '../assets/background.png';


const DetailsContainer = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 18px;
`;

const DetailsText = styled.Text`
    font-size: 30px;
    color: blueviolet;
`;



const DetailsScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      });
   
    const navigateToHome = () => {
        navigation.navigate('Home' , {name: 'back'});
    };


    return  (
        <DetailsContainer source={backgroundImage}>
        <DetailsText>Horoscope</DetailsText>
        <Button
        title="Home"
        onPress={navigateToHome}></Button>
        </DetailsContainer>
    );
};



export default DetailsScreen;