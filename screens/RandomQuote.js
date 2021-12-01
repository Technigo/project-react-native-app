import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Vibration } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

const RandomQuoteContainer = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const QuoteText = styled.Text`
	font-weight: 700;
`;

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
		<RandomQuoteContainer>
			<QuoteText>Quote: {quote.content}</QuoteText>
			<Text>Author: {quote.author}</Text>
		</RandomQuoteContainer>
	);
};
