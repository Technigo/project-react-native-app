import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Header } from './components/Header';
import { WorkoutType } from './components/WorkoutType';
import { WorkoutDetail } from './components/WorkoutDetail';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen name='Start page' component={WorkoutType} />
        <Stack.Screen name='Workout' component={WorkoutDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;