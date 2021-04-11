import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Touchable } from '../components/Touchable'
import { Profile } from './Profile'
import { LogOut } from './LogOut'
import Home from './Home'

const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const LogOutStack = createStackNavigator()

export const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{
        title:'Overview',
        headerRight: () => (
            <Touchable btnText="menu" onPress={() => navigation.openDrawer()}></Touchable>
        )
        }} 
        />
    </HomeStack.Navigator>
  )
}

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  )
}

export const LogOutStackScreen = () => {
  return (
    <LogOutStack.Navigator>
      <LogOutStack.Screen name="LogOut" component={LogOut} />
    </LogOutStack.Navigator>
  )
}