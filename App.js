import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import StartState from './components/StartState'
import Home from './components/Home'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
        name="StartState"
        component={StartState}
        />

        <Stack.Screen
        name="Home"
        component={Home}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


{/* <Stack.Navigator>
<Stack.Screen
name="StartState"
component={StartState}
/>
<Stack.Screen
  name="VillagerInfo"
  component={VillagerInfo}
/> */}