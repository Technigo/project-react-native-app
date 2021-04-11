import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

const LogoutContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Logout = () => {
  return (
    <LogoutContainer>
      <Text>Logout</Text>
      <Button />
    </LogoutContainer>
  );
};

export default Logout
