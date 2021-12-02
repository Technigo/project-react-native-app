import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';

//Styling
const QuoteText = styled.Text`
	font-weight: 700;
	color: white;
	font-size: 24px;
`;

const APIButton = styled.TouchableOpacity`
	width: 50%;
	align-items: center;
	justify-content: center;
	display: flex;
`;

const ShakeApi = () => {
	const [data, setData] = useState({
		x: 0,
		y: 0,
		z: 0,
	});
	const [quote, setQuote] = useState({}); //a state with an empty object to store the API data
	const [loading, setLoading] = useState(false);
	const [subscription, setSubscription] = useState(null);

	useEffect(() => {
		generateQuote();
	}, []);

	//when the component is mounted we should subscribe, and when it is unmounted unsubscribe
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

	//These two functions tell the accelerometer how often it should check
	// const slow = () => {
	//     Accelerometer.setUpdateInterval(1000);
	//   };

	//   const fast = () => {
	//     Accelerometer.setUpdateInterval(16);
	//   };

	//Tells the smartphone to keep us updated about the change of the position
	const subscribe = () => {
		// Accelerometer.setUpdateInterval(1000);
		setSubscription(
			Accelerometer.addListener((accelerometerData) => {
				setData(accelerometerData);
			})
		);
	};

	//Tell the smartphone to dont update me about the change of the position
	const unsubscribe = () => {
		subscription && subscription.remove();
		setSubscription(null);
	};

	const generateQuote = () => {
		setLoading(true);
		fetch('http://randommovielines.herokuapp.com//api/v1.0/famousquotes')
			.then((res) => res.json())
			//data (quote) we recieve in the second then
			.then((data) => setQuote(data))
			.finally(() => setLoading(false));
	};

	const isShakingEnough = (data) => {
		// x,y,z CAN be negative, force is directional
		// We take the absolute value and add them together
		// This gives us the total combined force on the device
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

		// If this force exceeds some threshold, return true, otherwise false
		// Increase this threshold if you need your user to shake harder
		return totalForce > 1.78;
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	const { x, y, z } = data;

	return (
		<View>
			<QuoteText>Quote: {quote.quote}</QuoteText>
		</View>
	);
};

// 	return (
// 		<View>
// 			{questions.map((question) => {
// 				return (
// 					<View key={question.id}>
// 						<QuoteText> Question: {question.question} </QuoteText>
// 						<Text> Answer: {question.correct_answer} </Text>
// 					</View>
// 				);
// 			})}
// 		</View>
// 	);
// };

export default ShakeApi;
