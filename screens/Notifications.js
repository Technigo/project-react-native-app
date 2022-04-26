import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import styled from 'styled-components/native';
// import { Base, Typography } from '../styles';
import { Container, Button, ButtonText } from '../styles/styled-components';

// This is the main container for this screen
// const NotificationsContainer = styled.View`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 80%;
//   margin: 0 auto;
// `;

export const Notifications = ({ navigation }) => {
  return (
    <Container>
      <Text>Notifications Screen</Text>
      <Button onPress={() => navigation.openDrawer()}>
        <ButtonText>
          Open drawer
        </ButtonText>
      </Button>

      <Button onPress={() => navigation.toggleDrawer()}>
        <ButtonText>
          Toggle drawer
        </ButtonText>
      </Button>
    </Container>
  );
};
