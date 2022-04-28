import React from 'react'
import styled from 'styled-components/native'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CatMeme from './screens/CatMeme'

import Home from './screens/Home';
import CatGif from './screens/CatGif'

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
              } else if (route.name === 'Design a meme') {
                iconName = focused ? 'ios-build' : 'ios-build-outline'
              } else if (route.name === 'Shake a cutie') {
                iconName = focused ? 'ios-shuffle' : 'ios-shuffle-outline'
              } else if (route.name === 'Cloud the cat') {
                iconName = focused ? 'ios-game-controller' : 'ios-game-controller-outline'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Design a meme" component={CatMeme} />
          <Tab.Screen name="Cloud the cat" component={CatGif} />
          <Tab.Screen name="Shake a cutie" component={CatImage} />

        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default App
