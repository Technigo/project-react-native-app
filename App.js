/*Outer dependencides*/
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*Inner dependencies*/
import { Home } from './pages/Home';
import { CardDetails } from './pages/CardDetails';

/*Using Stack as my type of Navigator*/
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name='Home'>
        <Stack.Screen component={Home} name='Magic' />
        <Stack.Screen component={CardDetails} name='CardDetails' />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
