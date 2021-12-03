import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const HeaderContainer = styled.View`
  height: 100px;
  background-color: #79b4b7;
`;

const HeaderText = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding-top: 40px;
  font-family: Arial;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>
        TODO OR NOT TODO
        <AntDesign name='meho' size={24} color='#000' />
      </HeaderText>
    </HeaderContainer>
  );
};
