import React from 'react'
import { Button, Text } from 'react-native'
import styled from 'styled-components/native'

const PageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Page = ({ navigation: {goBack} }) => {
  return (
    <PageContainer>
      <Text>Page screen </Text>
      <Button 
        title="Go Back" 
        onPress={ () => goBack()} 
      />
    </PageContainer>
  );
};