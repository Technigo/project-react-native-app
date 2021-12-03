import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const StyledHeader = styled.View`
    background-color: blue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 24px;
    color: palevioletred;
`;


const Header = () => {
    return (
        <StyledHeader>
                <Title>Dice Roller</Title>
        </StyledHeader>
    );
};

export default Header
