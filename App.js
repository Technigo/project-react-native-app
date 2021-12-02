import React from 'react'
import styled from 'styled-components/native'
// import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

import HomeScreen from './screens/HomeScreen'
import DiceOneScreen from './screens/DiceOneScreen'
import DiceTwoScreen from './screens/DiceTwoScreen'

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        showLabel: ({ focused }) => {
          return focused ? true : false
        },
        tabBarIcon: (tabInfo) => (
          <FontAwesome5
            name='dice'
            size={tabInfo.focused ? 24 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    DiceOne: {
      screen: DiceOneScreen,
      navigationOptions: {
        tabBarLabel: 'Fun Chores',
        tabBarIcon: (tabInfo) => (
          <MaterialCommunityIcons
            name='dice-1'
            size={tabInfo.focused ? 24 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    DiceTwo: {
      screen: DiceTwoScreen,
      navigationOptions: {
        tabBarLabel: 'Boring Nums',
        tabBarIcon: (tabInfo) => (
          // <Ionicons
          //   name='ios-videocam-outline'
          //   size={tabInfo.focused ? 25 : 20}
          //   color={tabInfo.tintColor}
          // />
          // <MaterialCommunityIcons
          //   name='dice-multiple-outline'
          //   size={tabInfo.focused ? 24 : 20}
          //   color={tabInfo.tintColor}
          // />
          <MaterialCommunityIcons
            name='dice-2'
            size={tabInfo.focused ? 24 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,

      style: {
        backgroundColor: '#006600',
        // marginTop: 28,
      },
    },
  }
)

const Navigator = createAppContainer(TabNavigator)

const App = () => {
  return (
    //SafeAreView - render content within the safe area boundaries of a device
    <SafeAreaView style={styles.container}>
      <Navigator>
        <HomeScreen />
      </Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
})

export default App
