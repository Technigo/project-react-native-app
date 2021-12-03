import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

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

// = StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // set top margin as the height of the statusbar of a device
    marginTop: StatusBar.currentHeight,
  },
})

export default App
