import React from 'react';
import styled from 'styled-components/native';

import RandomQuote from './components/RandomQuote';

const App = () => {
	return (
		<Container>
			<RandomQuote />
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	background-color: #3d405b;
	justify-content: center;
	align-items: center;
`;
export default App;
