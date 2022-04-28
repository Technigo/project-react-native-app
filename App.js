import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AddBooks from './components/AddBooks';
import Bookshelf from './components/Bookshelf';

const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
				name="Home"
				component={HomeScreen}
				/>
				<Stack.Screen name="Add books" component={AddBooks} />
				<Stack.Screen name="Bookshelf" component={Bookshelf} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
