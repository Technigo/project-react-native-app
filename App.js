import React from 'react';
import styled from 'styled-components/native';
// import Albums from './components/Albums';
//import RandomDrink from './components/RandomDrink';
import RandomQuote from './components/RandomQuote';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const App = () => {
	return (
		<Container>
			<RandomQuote />
		</Container>
	);
};

export default App;
