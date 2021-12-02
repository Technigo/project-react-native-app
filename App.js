import React, { useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ShakeApi from './components/ShakeApi';

const Container = styled.View`
	flex: 1;
	background-color: #eeaa04;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	color: palevioletred;
`;

const Drawer = createDrawerNavigator();

const App = () => {
	const [currentTab, setCurrentTab] = useState('Button');

	return (
		<Container>
			<ShakeApi />
		</Container>
	);
};

export default App;
