import React from 'react';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

import ButtonApi from './components/ButtonApi';
import RollD6 from './components/RollD6';



const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	color: palevioletred;
`;

const App = () => {
	return (
		<Container>
			<Title>Dice Roller</Title>

			<Title>Shake to roll a D6 (6 sided dice)</Title>
			{/* <ButtonApi />  */}
			<RollD6 />
		</Container>
	);
};

export default App;
