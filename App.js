import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartPage from './pages/StartPage';
import GeneratorPage from './pages/GeneratorPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Start' component={StartPage} />
        <Stack.Screen name='Generator' component={GeneratorPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
