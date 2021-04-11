import React from 'react'
import styled from "styled-components/native";

import EightBall from '../assets/EightBall.png'

const MagicIcon = styled.Image `
  width: 150px;
  height: 150px;
  margin: 25px;
`;

export const Icon = () => {
    return (
        <MagicIcon
        source ={EightBall} 
      />
    )
}