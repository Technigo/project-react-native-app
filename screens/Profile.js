import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const ProfileContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  backgroundColor: #000;
`;

export const Profile = () => {
  return (
    <ProfileContainer>
      <Text>Profile Screen</Text>
    </ProfileContainer>
  );
};
