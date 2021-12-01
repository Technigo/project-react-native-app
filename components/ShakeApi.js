import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	ActivityIndicator,
	TouchableHighlight,
} from "react-native";

const ShakeApi = () => {
	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		generateQuote();
	}, []);

	useEffect(() => {
		_subscribe();
		return () => _unsubscribe();
	}, []);

	useEffect(() => {
		if (isShaking(data)) {
			generateQuote();
		}
	}, [data]);

	const generateQuote = () => {
		setLoading(true);
		fetch("https://picsum.photos/200/300")
			.then((res) => res.json())
			.then((data) => setQuote(data))
			.finally(setLoading(false));
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	const { x, y, z } = data;

	return (
		<View>
			<Text>Click button to generate quote</Text>
			<TouchableHighlight onPress={generateQuote}>
				<Text>Click here</Text>
			</TouchableHighlight>
			<Image source={quote.id} />
			<Text>Author: {quote.author}</Text>

			<Text>x: {x}</Text>
			<Text>y: {y}</Text>
			<Text>z: {z}</Text>
		</View>
	);
};
export default ShakeApi;

//can use touchableopacity? to make click lighter
//mainpurpose of expo is to combine smartphones code

const [data, setData] = useState({
	x: 0,
	y: 0,
	z: 0,
});

//communication between code and position of phone
const [subscription, setSubscription] = useState(null);

// const _slow = () => {
//   Accelerometer.setUpdateInterval(1000)
// }

// const _fast = () => {
//   Accelerometer.setUpdateInterval(16)
// }

const _subscribe = () => {
	//maybe put in use effect if not using slow fast
	// Accelerometer.setUpdateInterval(1000)

	setSubscription(
		Accelerometer.addListener((accelerometerData) => {
			setData(accelerometerData);
		})
	);
};

const _unsubscribe = () => {
	subscription && subscription.remove();
	setSubscription(null);
};

//shaking the phone, return a boolean if true or not
const isShaking = (data) => {
	const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
	return totalForce > 1.78;
};
