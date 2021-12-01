import React, { useState, useEffect } from "react";
import {
	View,
	ScrollView,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	StyleSheet,
} from "react-native";

const ButtonApi = () => {
	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		generateQuote();
	}, []);

	const generateQuote = () => {
		setLoading(true);
		fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")
			.then((res) => res.json())
			.then((data) => setQuote(data))
			.finally(setLoading(false));
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	return (
		<ScrollView style={styled.quoteHeader}>
			<ScrollView style={styled.quoteContainer}>
				<Text style={styled.quoteText}>"{quote.sentence}"</Text>
				{/* lägga till att if house = null return something */}
				{/* kanske också if name is john snow, eller slugen? generateQuote igen för att ej visa hans citat */}
				<Text style={styled.nameAndHouse}>
					- {quote.character?.name}, {quote.character?.house?.name}
				</Text>
			</ScrollView>
			<TouchableOpacity onPress={generateQuote}>
				<Text style={styled.button}>Generate GOT wisdom</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};
export default ButtonApi;

const styled = StyleSheet.create({
	quoteHeader: {
		padding: 10,
		margin: 0,
		minWidth: 150,
		maxWidth: 200,
		display: "flex",
	},

	quoteContainer: {
		backgroundColor: "rgba(245,222,179, 0.5)",
		display: "flex",
		borderRadius: 2,
		padding: 10,
	},

	quoteText: {
		color: "rgba(51, 34, 21, 0.9)",
		fontSize: 30,
		fontStyle: "italic",
		display: "flex",
		padding: 5,
	},

	nameAndHouse: {
		color: "rgba(51, 34, 21, 0.9)",
	},

	button: {
		backgroundColor: "rgba(245,222,179, 0.8)",
		padding: 5,
		margin: 5,
		borderRadius: 5,
		color: "rgba(51, 34, 21, 1)",
	},
});
