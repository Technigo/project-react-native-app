import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'

export const Header = () => {


    return (
        <HeaderContainer>
            <HeaderText>TODOS</HeaderText>
        </HeaderContainer>
    )
}
const HeaderContainer = styled.View`
  height: 80px
  background-color: #48D1CC
  padding: 10px
  width: 100%
  align-items: center
  justify-content: center
  `
const HeaderText = styled.Text`
font-weight: bold
font-size: 25px
`

