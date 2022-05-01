import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FontAwesome5 } from '@expo/vector-icons';

import StartScreen from './screens/StartScreen'
import DogScreen from './screens/DogScreen'
import GameScreen from './screens/GameScreen'

const Tab = createBottomTabNavigator()

const App = () => {

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						if (route.name === 'Home') {
							return (
								<Ionicons
									name='home'
									size={size}
									color={color}
								/>
							);
						} else if (route.name === 'Game') {
							return (
								<Ionicons
									name='ios-game-controller'
									size={size}
									color={color}
								/>
							);
						} else if (route.name === 'Dogs') {
							return (
								<FontAwesome5
									name='dog'
									size={size}
									color={color}
								/>
							);
						}
					},
					tabBarInactiveTintColor: 'gray',
					tabBarActiveTintColor: 'tomato',
				})}
			>
				<Tab.Screen name="Home" component={StartScreen} />
				<Tab.Screen name="Game" component={GameScreen} />
				<Tab.Screen name="Dogs" component={DogScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
