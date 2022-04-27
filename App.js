import React from 'react';
import styled from 'styled-components/native';
import DrinksList from './components/DrinksList';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
`;

const App = () => {
	return (
		<Container>
			<DrinksList />
		</Container>
	);
};

export default App;
