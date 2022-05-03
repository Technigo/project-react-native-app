import React from 'react';
import styled from "styled-components/native";
import { View, Text, Linking } from 'react-native';


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>To make someone else's day, please click the link below and write about somehing that made you smile today</FooterText>
            <FooterLink onPress={() => Linking.openURL('https://spring2022-happy-tweets.netlify.app/')}>Happy Tweets</FooterLink>
        </FooterContainer>
    );
};


//----------------------------------------------//

const FooterContainer = styled.View`
    max-width: 50%;
`;

const FooterText = styled.Text`
    font-size: 14px;
    color: palevioletred;
    text-align: center;
    margin-bottom: 0;
    `;
    
    const FooterLink = styled.Text`
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: palevioletred;
    margin-bottom: 0;
    padding: 20px;

`;
