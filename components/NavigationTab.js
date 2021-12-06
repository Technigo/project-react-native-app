import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';

const NavigationTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: '#e91e63', headerShown: false }}
    >
      <Tab.Screen
        name="RecHome"
        component={Home}
        options={{
          selected: false,
          tabBarLabel: () => null,
          tabBarIcon: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
