import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Chat = () => {
  return (
    <Container>
      <Text>This is Chat Page </Text>
    </Container>
  );
};

export default Chat;
