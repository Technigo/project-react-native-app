import React from 'react';
import styled from 'styled-components/native';
import TechyApi from './components/TechyApi';

const Container = styled.View`
	flex: 1;
	background-color: lightgrey;
	justify-content: center;
	align-items: center;
	padding-top: 20px;
	`;

const Title = styled.Text`
	font-size: 24px;
	color: darkgreen;

`;


const App = () => {
	return (
		<Container>
			<Title>Do you want to sound like a tech nerd?</Title>
			<Title>Try these expressions</Title>
			<Title>👩‍💻👩‍💻👩‍💻</Title>
			<TechyApi> </TechyApi>
		</Container>
	);
};

export default App;
