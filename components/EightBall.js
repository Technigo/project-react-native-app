import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { CustomButton } from './CustomButton'
//import { animations } from 'react-animation'

const EightBallContainer = styled.View`
justify-content: center;
align-items: center;
background-color: transparent;
padding: 50px;
`;

const EightBallText = styled.Text`
  color: #00106b;
  font-size: 28px;
  font-weight: bold;
`;



export const EightBall = ({advice}) =>{

  return (
  <EightBallContainer>
      <EightBallText>💡 {advice}</EightBallText>
     </EightBallContainer>
  )
}