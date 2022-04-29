import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
		<View style={styles.container}>
			<TouchableOpacity style={styles.btn} onPress={generateQuote}>
				<Text style={styles.btnText}>New Quote</Text>
			</TouchableOpacity>
			<Text style={styles.quote}>"{quote.content}"</Text>
			<Text style={styles.author}>{quote.author}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 30,
	},
	btn: {
		alignItems: 'center',
		backgroundColor: '#81b29a',
		paddingVertical: 20,
		paddingHorizontal: 30,
		marginBottom: 10,
		alignSelf: 'center',
		borderRadius: 3,
	},
	btnText: {
		color: '#f4f1de',
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
	quote: {
		color: '#f4f1de',
		fontSize: 24,
		fontStyle: 'italic',
		textAlign: 'center',
		margin: 20,
		lineHeight: 30,
	},
	author: {
		color: '#f4f1de',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default RandomQuote;
