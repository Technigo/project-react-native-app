import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
//import { animations } from 'react-animation'

const EightBallContainer = styled.View`
justify-content: center;
align-items: center;
background-color: white;
`;

const EightBallText = styled.Text`
  color: black;
  font-size: 24px;
`;


export const EightBall = ({advice}) =>{

  return (
  <EightBallContainer>
      <EightBallText>💡 {advice}</EightBallText>
      <EightBallText></EightBallText>
    </EightBallContainer>
  )
}