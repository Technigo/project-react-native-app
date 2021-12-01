import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ShakeApi from './components/ShakeApi';
import HomePage from './components/HomePage';

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
        {/* Tab.Screen elements determine the different screens available for this app
        and the component attribute states which component to generate for each tab*/}
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Share" component={ShakeApi} />
      </Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
