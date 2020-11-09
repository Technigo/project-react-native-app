import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';


const OracleImage = styled.Image`
  position: relative;
  margin-left: 50px;
  width: 250px;
  height: 250px;
`
const StartText = styled.Text `
  flex:0.5;
  font-size: 30px;
  color: #f2f0f0;
`

export const StartScreen = () => { 
  return (
    <View> 
      <StartText> Shake me to get your Magic Oracle!</StartText>
      <OracleImage
        source={require('../assets/magic-ball.png')}
      />
    </View>
  )
};