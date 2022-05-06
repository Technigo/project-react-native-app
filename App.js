import React from 'react';
import styled from 'styled-components/native';
import TechyApi from './components/TechyApi';
import { ImageBackground } from 'react-native';

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	`;

const Title = styled.Text`
	font-size: 20px;
	color: darkgreen;
`;

const ContainerText = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
    width: 80%;
    padding-left: 20px;
    padding-right: 20px; 
	padding-top: 20px;   
`;

const Technician = styled.Image`
	width: 40%;
	height: 40%;
	background: black;
	margin-top: 20px;
	padding: 10px;
`;

const App = () => {
	return (
		<Container>
			<Technician source={require('./assets/technicians-at-work.jpg')} />
			<ContainerText>
				<Title>Want to sound like you know what you are talking about? 
				Try these techy expressions:
				👩‍💻👩‍💻👩‍💻</Title>					
			</ContainerText>
				<TechyApi/> 		
		</Container>
	);
};

export default App;
