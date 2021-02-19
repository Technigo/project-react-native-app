import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ChildrensStackScreen } from './ChildrensScreen'
import { HomeStackScreen } from './HomeScreen'

//Bottom tabs
const Tab = createBottomTabNavigator()
export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Fiction and Nonfiction" component={HomeStackScreen} />
      <Tab.Screen name="Children's books" component={ChildrensStackScreen} />
    </Tab.Navigator>
  )
}
