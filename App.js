import React from 'react';
import styled from 'styled-components/native';
import ButtonApi from './components/ButtonApi';

const Container = styled.View`
	flex: 1;
	background-color: #cfe2f3;
	justify-content: center;
	align-items: center;
`;

const App = () => {
	return (
		<Container>
			<ButtonApi />
		</Container>
	);
};

export default App;
