import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Activity } from "./Activity";
import { ActivityPage } from "./ActivityPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Quarantine activity generator' component={Activity} />
        <Stack.Screen name='ActivityPage' component={ActivityPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
