import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

export const CustomNavigationBar = ({ navigation }) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content
        title="My awesome app"
      />
    </Appbar.Header>
  );
};
