import React from 'react'
import styled from 'styled-components/native'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CatMeme from './screens/CatMeme'

import Home from './screens/Home';
import CatGif from './screens/CatGif'
import CatFactWalk from './screens/CatFactWalk';

import { Ionicons } from '@expo/vector-icons'
// import Ionicons from 'react-native-vector-icons/Ionicons'

import * as Sharing from 'expo-sharing'
import CatImage from './screens/CatImage'


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
              } else if (route.name === 'Meme') {
                iconName = focused ? 'ios-build' : 'ios-build-outline'
              } else if (route.name === 'Image') {
                iconName = focused ? 'ios-shuffle' : 'ios-shuffle-outline'
              } else if (route.name === 'CatFactWalk') {
                iconName = focused ? 'ios-walk' : 'ios-walk-outline'
              } else if (route.name === 'Gif') {
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
          <Tab.Screen name="Meme" component={CatMeme} />
          <Tab.Screen name="Gif" component={CatGif} />
          <Tab.Screen name="Image" component={CatImage} />
          <Tab.Screen name="CatFactWalk" component={CatFactWalk} />

        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default App
