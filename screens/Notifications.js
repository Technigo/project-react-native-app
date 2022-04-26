import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Notifications = ({ navigation }) => {
  return (
    <NotificationsContainer>
      <Text>Notifications Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </NotificationsContainer>
  );
};
