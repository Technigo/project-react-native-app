import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './screens/Home'
import DesignAMeme from './screens/DesignAMeme'
import CloudTheCat from './screens/CloudTheCat'
import ShakeACutie from './screens/ShakeACutie'

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
                ? 'ios-home'
                : 'ios-home-outline'
            } else if (route.name === 'Design a meme') {
              iconName = focused
                ? 'ios-build'
                : 'ios-build-outline'
            } else if (route.name === 'Shake a cutie') {
              iconName = focused
                ? 'ios-shuffle'
                : 'ios-shuffle-outline'
            } else if (route.name === 'Cloud the cat') {
              iconName = focused
                ? 'ios-game-controller'
                : 'ios-game-controller-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#e63946',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Design a meme" component={DesignAMeme} />
        <Tab.Screen name="Cloud the cat" component={CloudTheCat} />
        <Tab.Screen name="Shake a cutie" component={ShakeACutie} />
        {/* <Tab.Screen name="Walk for fact" component={WalkForFact} /> */}

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
