import React from 'react'

// Components
import StartScreen from './components/StartScreen';
import TipScreen from './components/TipScreen';
//import DisplayImage from './components/DisplayImage';
//import Footer from './components/Footer';

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
        <Stack.Screen name='Christmas tips' component={TipScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
