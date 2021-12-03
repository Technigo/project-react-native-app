import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const StyledHeader = styled.View`
    background-color: papayawhip;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin-top: 0;
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
