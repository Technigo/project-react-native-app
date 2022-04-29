import React from 'react';
import ShakeApi from './components/ShakeApi';
import StartPage from './components/StartPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Start' component={StartPage} />
        <Stack.Screen name='Quotes' component={ShakeApi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
