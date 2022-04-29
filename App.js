import React from 'react';
import { View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import StartPage from './components/StartPage';
import Facts from './components/Facts';
import ShakeApi from './components/ShakeApi';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Start">
        <Drawer.Screen name="Start" component={StartPage} />
        <Drawer.Screen name="Foxes" component={ShakeApi} />
        <Drawer.Screen name="Facts" component={Facts} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  )
 
}
export default App
