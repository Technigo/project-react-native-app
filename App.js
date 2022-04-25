import React from 'react';
import styled from 'styled-components/native';

import ArtworkList from './components/Artworklist';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const App = () => {
	return (
		<Container>
			<ArtworkList />
		</Container>
	)
};

export default App;
