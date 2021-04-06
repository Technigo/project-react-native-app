import React from 'react';
// import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Games } from '../screens/Games';
import { Profile } from '../screens/Profile';

import { CustomNavigationBar } from '../components/Appbar';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
