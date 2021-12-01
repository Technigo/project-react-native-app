import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  height: 70px;
  background-color: #778899;
`;

const HeaderText = styled.Text`
  position: relative;
  height: 100px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding-top: 10px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Header</HeaderText>
    </HeaderContainer>
  );
};
