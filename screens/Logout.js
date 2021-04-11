import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';


const LogoutContainer = styled.View` 
  flex: 1;  
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  background-color: #FB8500;
  padding: 20px;
`;

const StyledText = styled.Text`
  font-weight: 800;
  color: #023047;
`;

export const Logout = () => {
  const refresh  = () => { window.location.reload("Refresh")}

  return ( 
        <LogoutContainer>
            <StyledText>Thank you for your visit!</StyledText>
            <Button 
              title="Logout"
              onPress={refresh}
            />
        </LogoutContainer>
     );
}
 
