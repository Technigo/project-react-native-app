import React from 'react';
import { Appbar } from 'react-native-paper';

export const CustomNavigationBar = ({navigation}) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content title="My awesome app" onPress={() => navigation.navigate('Home')} />
    </Appbar.Header>
  );
};
