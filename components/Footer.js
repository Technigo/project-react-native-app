import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const FooterTextAuthor = styled.Text`
  font-size: 16px;
  text-align: center;
`

const FooterTextSchool = styled.Text`
  font-size: 14px;
  text-align: center;
`

const Footer = () => {
    return (
        <View>
            <FooterTextAuthor>By Camilla Hallberg</FooterTextAuthor>
            <FooterTextSchool>Technigo Web Development Bootcamp Spring 2022</FooterTextSchool>
        </View>
    )
}

export default Footer