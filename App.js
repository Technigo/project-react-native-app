import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Components
import HomeScreen from './components/HomeScreen';
import Recept from './components/Recept';
import LoadingTest from './components/LoadingTest';

const Stack = createStackNavigator();

// ------------------------------------------------------------------------------------------------

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingTest">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReceptNamn"
          component={Recept}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoadingTest"
          component={LoadingTest}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
