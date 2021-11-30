import React from 'react';
import styled from 'styled-components/native';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import ShakeApi from './components/ShakeApi';
import Portfolio from './components/Portfolio';
import { cart } from './reducers/cart'

const Container = styled.View`
	flex: 1;
	background-color: beige;
`
const reducer = combineReducers({
	cart: cart.reducer
})
const Stack = createNativeStackNavigator();

const store = configureStore({ reducer })

const App = () => {
	return (
		<Provider store={store}>
			<Container>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Homepage" component={Home} />
						<Stack.Screen name="Portfolio" component={Portfolio} />
						<Stack.Screen name="RandomCrypto" component={ShakeApi} />
					</Stack.Navigator>
				</NavigationContainer>
			</Container>
		</Provider>
	);
};

export default App;
