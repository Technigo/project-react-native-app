import React from 'react'

// Components
import StartScreen from './components/StartScreen';
import TipScreen from './components/TipScreen';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Start'
          component={StartScreen}
          options={{ title: 'Christmas countdown' }}
        />
        <Stack.Screen name='Christmas-tip' component={TipScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
