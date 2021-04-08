import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AffirmationMessage from './components/AffirmationMessage'
import Joke from './components/Joke'


const Stack = createStackNavigator();

const App = () => {
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Start" component={HomeScreen}
        options={{
          headerTitleStyle: {
            color: 'thistle',
          },
          headerStyle: {
            backgroundColor: '#833471',
          },
        }} />
        <Stack.Screen name="Inspiration" component={AffirmationMessage}
        options={{
          headerTitleStyle: {
            color: 'thistle',
          },
          headerStyle: {
            backgroundColor: '#833471',
          },
        }} 
        />
        <Stack.Screen name="Joke" component={Joke}
        options={{
          headerTitleStyle: {
            color: 'thistle',
          },
          headerStyle: {
            backgroundColor: '#833471',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;


