import React from 'react';
import styled from 'styled-components/native';
import GetWeather from './components/GetWeather';

const Container = styled.View`
	flex: 1;
	background-color: #e6f4f1;
	justify-content: center;
	align-items: center;
`;


const App = () => {
	return (
		<Container>
			<GetWeather />
		</Container>
	);
};

export default App;
