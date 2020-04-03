import React, { useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import Header from './components/Header';
import Fetch from './components/Fetch';
import RandomBeer from './components/RandomBeer';

const Container = styled.View`
	margin-top: 20;
	background-color: white;
	align-items: center;
`;

const App = () => {
	const [ press, setPress ] = useState(false);
	const [ beer, setBeer ] = useState();
	return (
		<Container>
			<Header title="🍻 IPA from API 🍻" titleTwo="The #1 app for beer lovers" />

			<Button title="Time for a beer" onPress={() => setPress(true)} />
			{press && <Fetch setBeer={setBeer} />}
			{beer && <RandomBeer beer={beer} setPress={setPress} />}
		</Container>
	);
};

export default App;
