import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from "react-native"

import ButtonApi from './components/ButtonApi';
import Header from './components/Header'
import ShakeApi from './components/ShakeApi'


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
		<Container>
			<Header headerTitle="App headers title"/>
			<ShakeApi />
		</Container>
	);
};

export default App;
