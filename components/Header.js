import React from 'react';
import { View, Text } from 'react-native';
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderTop>
      <Title></Title>
    </HeaderTop >
  );
}

const HeaderTop = styled.View`
height: 80;
paddingTop: 38;
backgroundColor: coral;
  
`

const Title = styled.Text`
textAlign: center;
color: #fff;
fontSize: 20;
fontWeight: bold;

`
export default Header