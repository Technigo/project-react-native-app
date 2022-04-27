import * as React from 'react';
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./components/Home";
import Drinks from "./components/DrinksList";
import RandomDrink from './components/RandomDrink';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen name="Drinks List" component={Drinks} />
				<Stack.Screen name="Random Drinks" component={RandomDrink} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "papayawhip",
		justifyContent: "center"
	}
});

export default App;
