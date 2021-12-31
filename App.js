import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LocationApi from './components/LocationApi';
import ButtonApi from './components/ButtonApi';
import ShakeApi from './components/ShakeApi';

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Location" component={LocationApi} />
				<Tab.Screen name="Button Quote" component={ButtonApi} />
				<Tab.Screen name="Shake Quote" component={ShakeApi} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
