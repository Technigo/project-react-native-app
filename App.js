import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import List from './components/List'
import VillagerInfo from './components/VillagerInfo'


const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="List"
        component={List}
        />
        <Stack.Screen
          name="VillagerInfo"
          component={VillagerInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App