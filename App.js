import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ButtonApi from './components/ButtonApi';
import ShakeApi from './components/ShakeApi';

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Button" component={ButtonApi} />
				<Tab.Screen name="Shake" component={ShakeApi} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
