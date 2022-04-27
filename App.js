import React from 'react';
import styled from 'styled-components/native';
import { GenerateButton } from './components/generatebutton';
import { Facts } from './components/facts'


const Container = styled.View`
	flex: 1;
	background-color: black;
	justify-content: center;
	align-items: center;
	padding: 40px;
`;

const Title = styled.Text`
	font-size: 24px;
	color: grey;
`;

const App = () => {
	return (
		<Container>
			<Title>Best of Space!</Title>
			<Facts />
			<GenerateButton />
		</Container>
	);
};

export default App;
