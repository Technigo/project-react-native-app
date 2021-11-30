import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const QuoteText = styled.Text`
	font-weight: 700;
`;

const APIButton = styled.TouchableOpacity`
	background-color: powderblue;
	width: 50%;
	align-items: center;
	justify-content: center;
	display: flex;
`;

const ButtonApi = () => {
	const [quote, setQuote] = useState({}); //a state with an empty object to store the API data
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		generateQuote();
	}, []);

	const generateQuote = () => {
		setLoading(true);
		fetch('http://api.quotable.io/random')
			.then((res) => res.json())
			//data (quote) we recieve in the second then
			.then((quote) => setQuote(quote))
			.finally(() => setLoading(false));
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	return (
		<View>
			<Text>Click button to generate quote!</Text>
			<APIButton onPress={generateQuote}>
				<Text> Click </Text>
			</APIButton>
			<QuoteText> Quote: {quote.content} </QuoteText>
			<Text> Author: {quote.author} </Text>
		</View>
	);
};

export default ButtonApi;
