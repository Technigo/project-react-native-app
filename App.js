import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

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
		<Container>
			<Title>This is your cool app!</Title>
			<Title>Test</Title>
			<Text>Hello!</Text>
			<Title>💅💅💅</Title>
		</Container>
		</NavigationContainer>
	);
};

export default App;
