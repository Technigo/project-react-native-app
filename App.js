import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { ChuckNorris } from './screens/ChuckNorris';
import { Answer } from './screens/Answers'
import { RandomAdvice } from './screens/RandomAdvice'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HOME" component={Home}/>
        <Drawer.Screen name="RANDOM ADVICE" component={RandomAdvice} />
        <Drawer.Screen name="YES OR NO?" component={Answer} />
        <Drawer.Screen name="'CHEERED UP' by CHUCK NORRIS" component={ChuckNorris} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
