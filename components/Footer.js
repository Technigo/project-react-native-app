import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 30px;
`

const FooterTextAuthor = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`

const FooterTextSchool = styled.Text`
  font-size: 14px;
  text-align: center;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTextAuthor>Made by Camilla Hallberg 👩🏽‍💻</FooterTextAuthor>
            <FooterTextSchool>Technigo Web Development Bootcamp Spring '22 </FooterTextSchool>
        </FooterContainer>
    )
}

export default Footer