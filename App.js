import React from 'react';
import styled from 'styled-components/native';

import ShakeApi from './components/ShakeApi';

const Container = styled.View`
	flex: 1;
	background-color: #dca524;
	justify-content: center;
	align-items: center;
	padding: 0 7px;
	text-align: center;
`;

const App = () => {
	return (
		<Container>
			<ShakeApi />
		</Container>
	);
};

export default App;
