import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment'

const HeaderTitle = styled.Text`
  padding-top: 60px;
  font-size: 32px;
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
  color: #5D534A;
`

const DateTime = styled.Text`
  font-size: 18px;
  text-align: center;
`

const HeaderText = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
`

const Header = () => {

    const dateTime = moment().format("MMMM Do");

    return (
        <View>
            <HeaderTitle>The Quote App</HeaderTitle>
            <DateTime>{dateTime}</DateTime>
            <HeaderText>Press the button below or shake ya phone!</HeaderText>
        </View>
    )
}

export default Header