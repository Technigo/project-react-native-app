import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Movies } from '../screens/Movies';
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
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
