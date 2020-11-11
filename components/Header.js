import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
height:80px;
padding:28px;
background-color: coral;
align-items:center;

`

const HeaderText = styled.Text`
color: white;
font-weight: bold;
font-size: 29px;
`


export default function Header() {
    return(
        <HeaderContainer>
            <HeaderText>2DAYS 2DO</HeaderText>
        </HeaderContainer>
    

    )
}