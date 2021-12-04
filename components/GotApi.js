import React, { useState, useEffect } from "react";
import {
	Text,
	ActivityIndicator,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { Accelerometer } from "expo-sensors";

const GotApi = () => {
	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState(false);

	//communication between code and position of phone
	const [subscription, setSubscription] = useState(null);
	const [data, setData] = useState({
		x: 0,
		y: 0,
		z: 0,
	});

	//generates quote when button is clicked
	useEffect(() => {
		generateQuote();
	}, []);

	//generates quote when phone is shaken strong enough
	useEffect(() => {
		if (isShaking(data)) {
			generateQuote();
		}
	}, [data]);

	//communication between device and backend
	useEffect(() => {
		Accelerometer.setUpdateInterval(1000);
		subscribe();
		return () => unsubscribe();
	}, []);

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
		fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")
			.then((res) => res.json())
			.then((data) => setQuote(data))
			.finally(setLoading(false));
	};

	//shaking the phone, return a boolean if true or not
	const isShaking = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
		return totalForce > 1.78;
	};

	return (
		<ScrollView style={style.quoteHeader}>
			{loading && <ActivityIndicator style={style.loader} />}
			<ScrollView style={style.quoteContainer}>
				<Text style={style.quoteText}>"{quote.sentence}"</Text>
				<Text style={style.nameAndHouse}>
					- {quote.character?.name}, {quote.character?.house?.name}
				</Text>
			</ScrollView>
			<TouchableOpacity onPress={generateQuote} style={style.button}>
				<Text style={style.buttonText}>
					Shake phone or click here to generate GOT wisdom
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default GotApi;

//Styling for GOT wisdoms
const style = StyleSheet.create({
	loader: {
		display: "flex",
		position: "absolute",
		zIndex: 1,
	},

	quoteHeader: {
		padding: 10,
		margin: 0,
		minWidth: 150,
		maxWidth: 250,
		display: "flex",
		marginTop: 150,
	},

	quoteContainer: {
		backgroundColor: "rgba(245,222,179, 0.5)",
		display: "flex",
		borderRadius: 2,
		padding: 10,
		shadowColor: "rgba(0, 0, 0, 0.4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 0.5, // IOS
		shadowRadius: 1, //IOS
		elevation: 2, // Android
	},

	quoteText: {
		color: "rgba(51, 34, 21, 0.9)",
		fontSize: 35,
		fontStyle: "italic",
		display: "flex",
		padding: 5,
		textAlign: "center",
	},

	nameAndHouse: {
		color: "rgba(51, 34, 21, 0.9)",
		textAlign: "center",
	},

	button: {
		backgroundColor: "rgba(51, 34, 21, 0.7)",
		padding: 5,
		margin: 5,
		fontSize: 15,
		borderRadius: 10,
		shadowColor: "rgba(245,222,179, 0.4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 0.5, // IOS
		shadowRadius: 1, //IOS
		elevation: 2, // Android
	},

	buttonText: {
		textAlign: "center",
		color: "rgba(245,222,179, 0.8)",
	},
});
