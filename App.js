import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DailyNasa } from './components/DailyNasa'
import { Details } from './components/Details'

//Nasa API Key: 08iR4WWfCjNzN30nufKyaR5LGHFjgXgynks7MDcF

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none" >
        <Stack.Screen name="Home" component={DailyNasa} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App

  
