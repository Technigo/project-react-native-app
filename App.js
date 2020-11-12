import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { StepCounter } from './components/StepCounter'
import { WeeklySteps } from './components/WeeklySteps'

const App = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Today' component={StepCounter} />
        <Stack.Screen name='Week' component={WeeklySteps} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

