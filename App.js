import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
