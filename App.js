import React from 'react'
import styled from 'styled-components/native'
// import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import HomeScreen from './screens/HomeScreen'
import DiceOneScreen from './screens/DiceOneScreen'
import DiceTwoScreen from './screens/DiceTwoScreen'
// import StartPage from './components/StartPage'
// import SensorComponent from './components/SensorComponent'

// const Container = styled.View`
//   flex: 1;
//   background-color: papayawhip;
//   justify-content: center;
//   align-items: center;
// `

// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
// `

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        showLabel: ({ focused }) => {
          console.log(focused)
          return focused ? true : false
        },
        tabBarIcon: (tabInfo) => (
          // <Ionicons
          //   name='ios-person-circle-outline'
          //   size={tabInfo.focused ? 25 : 20}
          //   color={tabInfo.tintColor}
          // />
          // <MaterialCommunityIcons
          //   name='dice-multiple-outline'
          //   size={tabInfo.focused ? 24 : 20}
          //   color={tabInfo.tintColor}
          // />
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
          // <Ionicons
          //   name='ios-images-outline'
          //   size={tabInfo.focused ? 24 : 20}
          //   color={tabInfo.tintColor}
          // />
          // <MaterialCommunityIcons
          //   name='dice-multiple-outline'
          //   size={tabInfo.focused ? 24 : 20}
          //   color={tabInfo.tintColor}
          // />
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
        tabBarLabel: 'Boring Numbers',
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
        marginTop: 28,
      },
    },
  }
)

const Navigator = createAppContainer(TabNavigator)

const App = () => {
  return (
    // <Container>
    //   {/* <StartPage /> */}
    //   {/* <SensorComponent></SensorComponent> */}
    // </Container>
    <>
      <Navigator>
        <HomeScreen />
      </Navigator>
    </>
  )
}

export default App
