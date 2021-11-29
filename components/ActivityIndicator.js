import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const Container = styled.ActivityIndicator`
  display: flex;
  justify-content: center;
`;

export const ActivityIndicator = () => {
  return (
    <Container>
      <Text>Loading</Text>
      <ActivityIndicator />
    </Container>
  );
};
