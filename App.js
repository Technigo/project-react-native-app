import React from 'react'
import styled from 'styled-components/native'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home';
import CatButtonGif from './screens/CatButtonGif'
import CatButtonMeme from './screens/CatButtonMeme'
import CatFactWalk from './screens/CatFactWalk';
import CatImageShake from './screens/CatImageShake'
import AccScreen from './screens/AccScreen'

import { Ionicons } from '@expo/vector-icons'
// import Ionicons from 'react-native-vector-icons/Ionicons'

import * as Sharing from 'expo-sharing'


const Tab = createBottomTabNavigator()

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline'
              } else if (route.name === 'CatButtonGif') {
                iconName = focused ? 'ios-star' : 'ios-star-outline'
              } else if (route.name === 'CatButtonMeme') {
                iconName = focused ? 'ios-happy' : 'ios-happy-outline'
              } else if (route.name === 'CatImageShake') {
                iconName = focused ? 'ios-shuffle' : 'ios-shuffle-outline'
              } else if (route.name === 'CatFactWalk') {
                iconName = focused ? 'ios-walk' : 'ios-walk-outline'
              } else if (route.name === 'AccScreen') {
                iconName = focused ? 'ios-game-controller' : 'ios-game-controller-outline'
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="CatButtonGif" component={CatButtonGif} />
          <Tab.Screen name="CatButtonMeme" component={CatButtonMeme} />
          <Tab.Screen name="CatImageShake" component={CatImageShake} />
          <Tab.Screen name="CatFactWalk" component={CatFactWalk} />
          <Tab.Screen name="AccScreen" component={AccScreen} />

        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default App
