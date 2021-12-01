import React from 'react';
import styled from 'styled-components/native';


import ShakeApi from './components/ShakeApi';

const Container = styled.View`
	flex: 1;
	background-color: #AB9F9D;
	justify-content: center;
	align-items: center;
  height: 100%;
`;

const App = () => {
	return (
		<Container>
			<ShakeApi />
		</Container>
	);
};

export default App;
