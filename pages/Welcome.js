import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  text-align: center;
`

const IntroductionText = styled.Text`
  text-align: center;
  margin: 15px;
  font-size: 18px;
  font-weight: 500;
`

export const Welcome = () => {
    return (
        <View>
            <Title>Random Facts</Title>
            <IntroductionText>This App gives you random information about cats and dogs, because - why not?</IntroductionText>
        </View>
    )
}