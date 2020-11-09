import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ShareScreen } from './components/ShareScreen';
import { HomeScreen } from './components/HomeScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          paddingTop: 20,
          backgroundColor: '#99dddd',
        },
        labelStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 15,
        },
        indicatorStyle: {
          borderBottomColor: 'black',
          borderBottomWidth: 3,
        },
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Share" component={ShareScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

//Light blue tone: #99dddd