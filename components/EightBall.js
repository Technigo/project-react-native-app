import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
//import { animations } from 'react-animation'

const EightBallContainer = styled.View`
justify-content: center;
align-items: center;
background-color: black;
min-height: 250px;
min-width:250px;
`;

const EightBallText = styled.Text`
  color: white;
  font-size: 24px;
`;

export const EightBall = ({answer}) =>{
  return (
  <EightBallContainer>
      <EightBallText>{answer}</EightBallText>
    </EightBallContainer>
  )
}