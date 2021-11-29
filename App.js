import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, Button } from "react-native";

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
	const [count, setCount] = useState(0);

	return (
		<Container>
			<Title>React Native Project!</Title>
			<Title>Go to App.js and start coding</Title>
			<Title>💅💅💅</Title>
			<Title>count: {count}</Title>
			<Button title="Click me" onPress={() => setCount(count + 1)} />
		</Container>
	);
};

export default App;
