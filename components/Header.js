import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment'

const HeaderContainer = styled.View`
  padding-bottom: 50px;
`

const HeaderTitle = styled.Text`
  padding-top: 60px;
  font-size: 36px;
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
  color: #5D534A;
`

const DateTime = styled.Text`
  font-size: 18px;
  text-align: center;
  font-style: italic;
  color: #5D534A;
  text-decoration: underline;
`

const HeaderTextContainer = styled.View`
  background-color: #7897AB;
  border: 2px solid #7897AB;
  border-radius: 6px;
  margin-top: 20px;
`

const HeaderText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 8px;
`

const Header = () => {

    const dateTime = moment().format("MMMM Do");

    return (
        <HeaderContainer>
            <HeaderTitle>The Quote App</HeaderTitle>
            <DateTime>{dateTime}</DateTime>
            <HeaderTextContainer>
                <HeaderText>Press the button below or shake ya phone!</HeaderText>
            </HeaderTextContainer>
        </HeaderContainer>
    )
}

export default Header