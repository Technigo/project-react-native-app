import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AddBooks from './components/AddBooks';


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
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
