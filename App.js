import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from "react-native"

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// import ButtonApi from './components/ButtonApi';
import Header from './components/Header'
import ShakeFox from './components/ShakeFox'
import ShakeDog from './components/ShakeDog'
import ShakeCat from './components/ShakeCat'

/* const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 22px;
	color: palevioletred;
`; */

const Drawer = createDrawerNavigator()

const App = () => {
	/* 	return (
		<Container>
			<Header headerTitle="App headers title"/>
			<ShakeApi />
		</Container>
	); */

	return (
		
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Foxes">
				<Drawer.Screen name="Foxes" component={ShakeFox} />
				<Drawer.Screen name="Cats" component={ShakeCat} />
				<Drawer.Screen name="Dogs" component={ShakeDog} />
		  	</Drawer.Navigator>
		</NavigationContainer>
	  )

};

export default App;
