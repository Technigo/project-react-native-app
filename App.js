import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Today from './Today'
import Week from './Week'

const Tab = createBottomTabNavigator();

const App = () => {
  
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name="Week" component={Week} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App

