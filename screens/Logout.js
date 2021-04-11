import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { Home } from './Home';

const LogoutContainer = styled.View` 
  flex: 1;  
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  background-color: #FB8500;
  padding: 20px;
`;

const StyledText = styled.Text`
  font-size: 1.5rem;
  font-weight: 800;
  font-color: #023047;
`;

export const Logout = () => {
    return ( 
        <LogoutContainer>
            <StyledText>Thank you for your visit!</StyledText>
            <Button title="Back Home" />
        </LogoutContainer>
     );
}
 
