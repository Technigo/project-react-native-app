import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import { Movies } from './components/Movies'


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Movies"
          component={Movies}
          options={{ title: 'Movies' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
