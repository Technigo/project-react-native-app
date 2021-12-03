import React from 'react';
import ShakeApi from './components/ShakeApi';
import ButtonApi from './components/ButtonApi';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Shake Kanye" component={ShakeApi} />
        <Drawer.Screen name="Click Quotes" component={ButtonApi} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
