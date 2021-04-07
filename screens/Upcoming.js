import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const UpcomingContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  backgroundColor: #000;
`;

export const Upcoming = () => {
  return (
    <UpcomingContainer>
      <Text>Notifications Screen</Text>
    </UpcomingContainer>
  );
};
