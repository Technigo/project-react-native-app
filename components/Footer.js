import React from 'react'
import styled from 'styled-components/native'

import { Text } from 'react-native';

const FooterView = styled.View`
    flex: 10;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;

`;
const FooterText = styled.Text`
    justify-content: center;
    align-items: center;
    color: white;
`;


export const Footer = () => {
    return (
        <FooterView>
            <FooterText>Made by Ylva Landoff Lindberg</FooterText>
            <FooterText>Pictures credited to Aldis Ellertsdottir</FooterText>
        </FooterView>
    );
};