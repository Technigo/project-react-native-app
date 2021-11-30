import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';


const QuoteView = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	border: solid 2px blue;
	width: 400px;
	padding: 20px;
	object-fit: scale-down;
`
const QuoteText = styled.Text`
	font-weight: 700;
	border: solid 2px black;
`;
const BurgerImage = styled.Image`
	width: 350px;
	height: 350px;
	margin: 20px;

`

const ShakeApi = () => {
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
		fetch('https://meme-api.herokuapp.com/gimme')
			.then((res) => res.json())
			.then((data) => setQuote(data))
			.finally(() => setLoading(false));
	};

	const isShakingEnough = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
		return totalForce > 1.78;
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	return (
		<QuoteView>
			<QuoteText>Quote: {quote.title}</QuoteText>
			<BurgerImage source={{uri: `${quote.url}` }} />
			<Text>COWABUNGA!</Text>
		</QuoteView>
	);
};

export default ShakeApi;
