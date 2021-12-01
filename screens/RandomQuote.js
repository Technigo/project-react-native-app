import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	ActivityIndicator,
	Vibration,
	StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

// Styled components

// const RandomQuoteContainer = styled.View`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	height: 100%;
// `;

// Stylesheet

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
	magic8ball: {
		width: 300,
		height: 300,
		backgroundColor: "black",
		borderRadius: 150,
	},
	quote: {
		width: 300,
		height: 300,
		borderRadius: 150,
		fontWeight: "700",
		color: "#ffffff",
		borderColor: "red",
		borderWidth: 5,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 30,
		textAlign: "center",
	},
});

export const RandomQuote = () => {
	const [data, setData] = useState({
		x: 0,
		y: 0,
		z: 0,
	});
	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState(false);
	const [subscription, setSubscription] = useState(null);

	useEffect(() => {
		generateQuote();
	}, []);

	useEffect(() => {
		Accelerometer.setUpdateInterval(1000);
		subscribe();
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (isShakingEnough(data)) {
			generateQuote();
		}
	}, [data]);

	const subscribe = () => {
		setSubscription(
			Accelerometer.addListener((accelerometerData) => {
				setData(accelerometerData);
			})
		);
	};

	const unsubscribe = () => {
		subscription && subscription.remove();
		setSubscription(null);
	};

	const generateQuote = () => {
		setLoading(true);
		fetch("http://api.quotable.io/random")
			.then((response) => response.json())
			.then((data) => setQuote(data))
			.finally(() => setLoading(false));
		Vibration.vibrate();
	};

	const isShakingEnough = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
		return totalForce > 1.78;
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	return (
		<View style={styles.container}>
			<View style={styles.magic8ball}>
				{/* <Question>What movie should I watch?</Question> */}
				<Text style={styles.quote}>{quote.content}</Text>
			</View>
			{/* <Text>Author: {quote.author}</Text> */}
			<Text>Shake to start</Text>
		</View>
	);
};
