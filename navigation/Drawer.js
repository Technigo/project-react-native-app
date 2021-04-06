import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';


export const DrawerContent = ({ navigation, ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      <Drawer.Item
        label="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Drawer.Item
        label="Games"
        onPress={() => navigation.navigate('Games')}
      />
      <Drawer.Item
        label="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </DrawerContentScrollView>
  );
};
