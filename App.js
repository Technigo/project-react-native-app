import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { WeatherContainer } from './components/weatherComponents/WeatherContainer'
import { Forcast } from './components/Forcast'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TodayWeather' component={WeatherContainer} />
        <Stack.Screen name='FiveDaysForcast' component={Forcast} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

