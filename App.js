import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import {View, Text, ActivityIndicator, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LaunchPadScreen} from './component/LaunchPadScreen'
import {DetailScreen} from './component/DetailScreen'

const Stack = createStackNavigator();

function LoadingScreen () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator color={"#000"} />
    </View>  
  )
}

const App = () => {
  const [launches, setLaunches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {isLoading && <Stack.Screen name="Loading" component={LoadingScreen} />} */}
        <Stack.Screen name="Launchpad" component={LaunchPadScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
