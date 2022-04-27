import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import Artworkslist from './components/Artworkslist';
import RandomArtwork from './components/RandomArtwork';

const Drawer = createDrawerNavigator();

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	align-items: center;
`;

const App = () => {
	return (
		<NavigationContainer style={Container}>
		<Drawer.Navigator initialRouteName="Home">
		  <Drawer.Screen name="Home" component={Artworkslist} />
		  <Drawer.Screen name="Surprise Shake Artwork" component={RandomArtwork} />
		</Drawer.Navigator>
	  </NavigationContainer>
	);
};

export default App;
