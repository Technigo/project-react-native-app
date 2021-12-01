import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const Trail = () => {
  return (
    <View>
      <Title>You are in... Sweden, shake for trail!</Title>
    </View>
  );
};

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;
