import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const StyledHeader = styled.View`
    margin-bottom: 40px;
`

const Header = () => {
    return(
        <StyledHeader>
            <Text>Are you feeling blue? This will cheer you up!</Text>
        </StyledHeader>
    )
}

export default Header