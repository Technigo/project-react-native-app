import React, {useState, useEffect} from 'react';
// importing core componenets from react native
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const QuoteText = styled.Text`
	font-weight: 700;
`;

const APIButton = styled.TouchableOpacity`
	background-color: green;
`

const ButtonApi = () => {

	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		generateQuote();
	}, []);

	const generateQuote = () => {
		setLoading(true);
		fetch('http://api.quotable.io/random')
			.then((res) => res.json())
			.then((quote) => setQuote(quote))
			.finally(() => setLoading(false))
	};

	if(loading) {
		return <ActivityIndicator />
	}

	return (
		<View>
			<Text>Click the button to generate quote!</Text>
			{/* when button pressed the api is called */}
			<APIButton onPress={generateQuote}>
				<Text>Click</Text>
			</APIButton>
			<QuoteText>Quote: {quote.content}</QuoteText>
			<Text>Author: {quote.author}</Text>
		</View>
	)
};

export default ButtonApi;