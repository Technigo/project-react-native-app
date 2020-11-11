import React from 'react'
import styled from 'styled-components/native'
import headerImage from '../assets/mountain.jpg';

const HeaderContainer = styled.ImageBackground`
height:180px;
padding:58px;
align-items:center;

`

const HeaderText = styled.Text`
color: white;
font-weight: bold;
font-size: 40px;
text-shadow: 2px 2px 2px coral;
`
const HeaderUnderText = styled.Text`
color: white;
font-weight: bold;
margin-top:20px;
font-size: 15px;
text-shadow: 2px 2px 2px coral;
`

export default function Header() {
    return(
        <HeaderContainer source={headerImage}>
            <HeaderText>NEW HABITS</HeaderText>
            <HeaderUnderText>it takes 21 days to make a habit</HeaderUnderText>
        </HeaderContainer>
    

    )
}