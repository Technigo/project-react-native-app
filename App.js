import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./components/Home";
import Drinks from "./components/DrinksList";
import RandomDrinks from './components/RandomDrinks';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Home' }}
				/>
				<Stack.Screen name="Drinks List" component={Drinks} />
				<Stack.Screen name="Random Drinks" component={RandomDrinks} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
