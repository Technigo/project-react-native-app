import React from 'react';
// importing styled from a specific native core
import styled from 'styled-components/native';

import ButtonApi from './components/ButtonApi';
import ShakeApi from './components/ShakeApi';

const Container = styled.View`
	flex: 1;
	background-color: black;
	justify-content: center;
	align-items: center;
`;

const App = () => {

	return (
		<Container>
			<ShakeApi  />
		</Container>
	);
};

export default App;
