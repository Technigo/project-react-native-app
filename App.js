import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen';
import FeaturedScreen from './screens/FeaturedScreen';
import LovedScreen from './screens/LovedScreen';

const Tab = createBottomTabNavigator();

const App = () => {

	const [lovedAnimals, setNewLoved] = useState([]);

	const onPressHeart = (animal) => {
		console.log('lovedAnimals', lovedAnimals);
		if (!lovedAnimals.includes(animal)) {
			lovedAnimals.push(animal);
		}
    }

	return (

		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
					iconName = focused
						? 'ios-home'
						: 'ios-home-outline';
					} else if (route.name === 'Featured') {
						iconName = focused ? 'ios-happy' : 'ios-happy-outline';
					} else if (route.name === 'Loved') {
						iconName = focused ? 'ios-heart' : 'ios-heart-outline'
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: 'black',
				tabBarInactiveTintColor: 'black',
				tabBarActiveBackgroundColor: 'white',
				tabBarInactiveBackgroundColor: 'white'
				})}
			>
				<Tab.Screen name="Home" component={HomeScreen} initialParams={{ onPressHeart:onPressHeart }} />
				<Tab.Screen name="Featured" component={FeaturedScreen} />
				<Tab.Screen name="Loved" component={LovedScreen} initialParams={{ lovedAnimals:lovedAnimals }} options={{ tabBarBadge: lovedAnimals.length }} />
			</Tab.Navigator>
		</NavigationContainer>

	);
};

export default App;
