import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

export const CustomNavigationBar = ({ navigation }) => {
  return (
    <Appbar.Header>
      <Appbar.Action color="white" icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content
        color="white"
        title="My awesome app"
      />
    </Appbar.Header>
  );
};
