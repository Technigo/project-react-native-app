import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './Stack';
import { DrawerContent } from './Drawer';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
