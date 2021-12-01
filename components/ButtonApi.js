import React, { useState, useEffect } from "react";
import {
	View,
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
		<View style={styled.quoteHeader}>
			<View style={styled.quoteContainer}>
				<Text style={styled.quoteText}>"{quote.sentence}"</Text>
				{/* lägga till att if house = null return something */}
				{/* kanske också if name is john snow, eller slugen? generateQuote igen för att ej visa hans citat */}
				<Text style={styled.nameAndHouse}>
					- {quote.character?.name}, {quote.character?.house?.name}
				</Text>
			</View>
			<TouchableOpacity onPress={generateQuote}>
				<Text style={styled.button}>Generate GOT wisdom</Text>
			</TouchableOpacity>
		</View>
	);
};
export default ButtonApi;

const styled = StyleSheet.create({
	quoteHeader: {
		padding: 10,
		margin: 0,
		width: 700,
		minWidth: 600,
		maxWidth: 800,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

	quoteContainer: {
		backgroundColor: "rgba(245,222,179, 0.5)",
		boxShadow: "2px 2px 8px #DEB887",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 2,
		padding: 10,
	},

	quoteText: {
		color: "rgba(51, 34, 21, 0.9)",
		textShadow: "2px 2px 8px #DEB887",
		fontSize: 30,
		fontStyle: "italic",
		display: "flex",
		textAlign: "center",
		padding: 5,
	},

	nameAndHouse: {
		color: "rgba(51, 34, 21, 0.9)",
		textShadow: "2px 2px 8px #DEB887",
	},

	button: {
		backgroundColor: "rgba(245,222,179, 0.8)",
		padding: 5,
		width: "fit-content",
		margin: 5,
		borderRadius: 5,
		color: "rgba(51, 34, 21, 1)",
		textShadow: "2px 2px 8px #DEB887",
	},
});
