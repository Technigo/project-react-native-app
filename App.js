import React from 'react'
import { MoviesList } from './components/MoviesList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MovieDetail } from './components/MovieDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Top 20 Movies" component={MoviesList} />
        <Stack.Screen name="Movie Detail" component={MovieDetail} />
      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default App
