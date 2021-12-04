import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomePage from './components/HomePage';
import Movies from './components/Movies';

const Tab = createMaterialTopTabNavigator();

const App = () => {

	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{
					"tabBarActiveTintColor": "red",
					"tabBarInactiveTintColor": "white",
					"tabBarLabelStyle": {
						"textAlign": "center",
						"fontWeight": "bold",
						"fontSize": 15
					},
					"tabBarIndicatorStyle": {
						"borderBottomColor": "black",
						"borderBottomWidth": 3
					},
					"tabBarStyle": {
						"paddingTop": 50,
						"backgroundColor": "black"
					}
				}}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Movies" component={Movies} />
      </Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
