import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const RandomQuote = () => {
	const [quote, setQuote] = useState({});

	const generateQuote = () => {
		fetch('https://api.quotable.io/random')
			.then((res) => res.json())
			.then((data) => setQuote(data));
	};

	useEffect(() => {
		generateQuote();
	}, []);

	return (
		<View>
			<ButtonContainer onPress={generateQuote}>
				<ButtonText>New quote</ButtonText>
			</ButtonContainer>
			<Text>"{quote.content}"</Text>
			<Text>{quote.author}</Text>
		</View>
	);
};

const ButtonContainer = styled.TouchableOpacity`
	background-color: green;
`;

const ButtonText = styled.Text`
	color: white;
`

export default RandomQuote;
