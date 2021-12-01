import React from 'react';
import styled from 'styled-components/native';

import { Quote } from './components/Quote';

const Container = styled.View`
	flex: 1;
	background-color: #9C8CD4;
	justify-content: center;
	align-items: center;
	text-align:center;
`;

const App = () => {
	return (
		<Container>
			<Quote />
		</Container>
	);
};

export default App;
