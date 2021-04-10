import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const LogoutContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
const Logout = () => {
  return (
    <LogoutContainer>
      <Text>Logout here</Text>

    </LogoutContainer>
  );
};

export default Logout
