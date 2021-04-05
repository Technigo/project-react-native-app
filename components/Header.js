import React from 'react'
import { Text, View } from 'react-native'

import styled from 'styled-components/native';


const HeaderTextContainer = styled.View`
  background-color: pink;
  flex:0.2;
  justify-content: center;
  align-items: center;
`;


const HeaderAlert = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: black;
`;

export const Header = () => {
  return (
    <HeaderTextContainer>
      <HeaderAlert>Random jokes</HeaderAlert>
    </HeaderTextContainer>
  )
}

