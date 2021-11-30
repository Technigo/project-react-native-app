import React, {useState, useEffect} from 'react';
// importing core componenets from react native
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';


import { FETCH_URL } from '../utils/urls';

const QuoteText = styled.Text`
	font-weight: 700;
	color: white;
`;

const APIButton = styled.TouchableOpacity`
	background-color: green;
`

const ButtonApi = () => {

	//const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState(false);

	//useEffect(() => {
	//	generateQuote();
	//}, []);

	//const generateQuote = () => {
	//	setLoading(true);
	//	fetch('http://api.quotable.io/random')
	//		.then((res) => res.json())
	//		.then((quote) => setQuote(quote))
	//		.finally(() => setLoading(false))
	//};


	const generateMovie = () => {
		setLoading(true);
		fetch(FETCH_URL)
			.then((res) => res.json())
			.then((json) => setMovieList(json.results))
			.finally(() => setLoading(false))
	};

	if(loading) {
		return <ActivityIndicator />
	}

	return (
		<View>
			<QuoteText>Welcome to Randomizer!</QuoteText>
			<QuoteText>Click the button to generate quote!</QuoteText>
			{/* when button pressed the api is called */}
			<APIButton onPress={generateMovie}>
				<QuoteText>Click</QuoteText>
			</APIButton>
		</View>
	)
};

export default ButtonApi;