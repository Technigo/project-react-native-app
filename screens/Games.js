import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const GamesContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Games = () => {
  return (
    <GamesContainer>
      <Text>Games Screen</Text>
    </GamesContainer>
  );
};