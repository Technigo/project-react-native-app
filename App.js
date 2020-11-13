import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from './components/HomeScreen';
import FrogScreen from './components/FrogScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Welcome' }}
        />
      <Stack.Screen 
        name="Frog" 
        component={FrogScreen}
        />
     </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;
