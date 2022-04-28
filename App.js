import React from 'react';
import styled from 'styled-components/native';
import ButtonAPI from './components/ButtonAPI';
import Header from './components/Header';
import Footer from './components/Footer';

const Container = styled.View`
	flex: 1;
	background-color: #F8EDED;
	justify-content: center;
	align-items: center;
	padding: 8px;
`;

const App = () => {
	return (
		<Container>
			<Header />
			<ButtonAPI></ButtonAPI>
			<Footer />
		</Container>
	);
};

export default App;
