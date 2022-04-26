import React from 'react';
import styled from 'styled-components/native';

import Artworks from './components/Artworks';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	align-items: center;
`;

const App = () => {
	return (
		<Container>
			<Artworks />
		</Container>
	);
};

export default App;
