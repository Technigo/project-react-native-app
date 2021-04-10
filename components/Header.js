import React from 'react';
import styled from 'styled-components/native';
import { Rubik_900Black } from '@expo-google-fonts/rubik';


const HeaderView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 100px 0 0 0;
    height: 60px;
`;

const HeaderText = styled.Text`
    text-align: center;
    font-family: 'Rubik;
    font-size: 36px;
    font-weight: 900;
    color: #ff9c2a;
    text-decoration: underline #FF9C2A;
`;

export const Header = ()  => {
    return (
        <HeaderView>
            <HeaderText>Ultimate Excuse App</HeaderText>
        </HeaderView>
    );
};