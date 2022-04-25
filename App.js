import React from 'react';
import { Text } from 'react-native';
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
			<Text>Rembrandt</Text>
			<ArtworkList />
		</Container>
	);
};

export default App;
