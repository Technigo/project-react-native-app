import React from 'react';
import styled from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import DetailsScreen  from './components/DetailsScreen';


const Stack = createStackNavigator();


const App = () => {
  
  return (
    //like a section
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen name='Details' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App
