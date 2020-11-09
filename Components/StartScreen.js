import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';


const OracleImage = styled.Image`
  margin-left: 50px;
  margin-top: 60px;
  padding-top: 60px;
  width: 250px;
  height: 250px;
`
const StartText = styled.Text `
  flex:0.5;
  text-align: center;
  padding-top:50px;
  font-size: 27px;
  color: #f2f0f0;
`

export const StartScreen = () => { 
  return (
    <View> 
      <OracleImage
        source={require('../assets/fortune-teller.png')}
      />
      <StartText>Shake me to get your Magic Oracle!✨</StartText>
    </View>
  )
};