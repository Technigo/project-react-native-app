import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Dice from './components/Dice';
import EntryPage from './components/EntryPage';

const Drawer = createDrawerNavigator();	

const App = () => {
	return (		
	<NavigationContainer>
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Start" component={EntryPage} />
			<Drawer.Screen name="Dice" component={Dice} />
		</Drawer.Navigator>	
	</NavigationContainer>
	);
};

export default App;
