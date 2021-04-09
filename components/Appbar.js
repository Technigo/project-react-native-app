import React from 'react';
import { Appbar } from 'react-native-paper';

export const CustomNavigationBar = ({ navigation }) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content
        title="Filmoona"
      />
    </Appbar.Header>
  );
};
