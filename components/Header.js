import React from "react"
import { View, Text, Image } from "react-native"
import styled from 'styled-components/native'

const HeaderContainer = styled.View`
    border-radius: 10px;
    width: 90%;
    padding: 20px;
    margin: 10px;
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