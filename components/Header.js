import React from 'react';
import styled from "styled-components/native";
import { View } from 'react-native';


export const Header = () => {
    return (
        <View>
            <Title>Hi there!</Title>
            <UnderTitle>Hope you're having a wonderful day!</UnderTitle>
            <UnderTitle>If not, please shake your phone gently to recieve some puppy love</UnderTitle>
        </View>
    );
};

//----------------------------------------------//

const Title = styled.Text`
    font-size: 28px;
    color: palevioletred;
    text-align: center;
    margin: 30px 0;
    font-weight: 700;
`;

const UnderTitle = styled.Text`
    font-size: 16px;
    color: palevioletred;
    text-align: center;
`;
