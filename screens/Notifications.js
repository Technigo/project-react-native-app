import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
// import styled from 'styled-components/native';
import { Base, Typography } from '../styles';
import { Container } from '../styles/styled-components/styled-components';

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
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={Base.button}>
        <Text style={Typography.button}>
          Open drawer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={Base.button}>
        <Text style={Typography.button}>
          Toggle drawer
        </Text>
      </TouchableOpacity>
    </Container>
  );
};
