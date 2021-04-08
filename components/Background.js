import React from 'react';
import styled from 'styled-components/native';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const  HomeImage = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Screen = () => {
    return (
        
        <HomeImage 
            source={{uri:'./assets/background.jpg'}} >

        </HomeImage>
    )
}