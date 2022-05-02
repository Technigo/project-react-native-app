import React from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();	

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	color: palevioletred;
`;

const App = () => {
	return (
		<NavigationContainer>
		<Drawer.Navigator>
		<Drawer.Screen name="Start" component={SensorComponent} />
		</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
