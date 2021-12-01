import React from "react"
import { View, Text, Image } from "react-native"
import styled from 'styled-components/native'

const HeaderContainer = styled.View`
    padding: 20px;
    margin-top: 20px;
    background-color: pink;
    justify-content: center;
    align-items: center;
`
const HeaderText = styled.Text`
    font-weight: 700;
`


const Header = (props) => {

    return (
        <HeaderContainer>
            <HeaderText>{props.headerTitle}</HeaderText>
        </HeaderContainer>
    )
}

export default Header