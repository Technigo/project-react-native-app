import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	ActivityIndicator,
	Vibration,
	StyleSheet,
} from "react-native";
import { Accelerometer } from "expo-sensors";
import { LinearGradient } from "expo-linear-gradient";
import { Keyframe, Easing } from "react-native-reanimated";
// import { Mobile } from "../components/Mobile";

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
		borderRadius: 150,
		marginBottom: 40,
		shadowColor: "#000",
		shadowOffset: {
			width: 3,
			height: 5,
		},
		shadowOpacity: 0.3,
		shadowRadius: 8,
	},
	textContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		fontWeight: "700",
		color: "#fff",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 35,
		textAlign: "center",
	},
	introText: {
		fontWeight: "700",
		fontSize: 29,
		lineHeight: 38,
		color: "#fff",
		textAlign: "center",
	},
	quoteText: {
		fontWeight: "700",
		fontSize: 19,
		lineHeight: 28,
		color: "#fff",
		textAlign: "center",
	},
	shakeText: {
		fontWeight: "600",
		fontSize: 16,
		lineHeight: 28,
		color: "#031b3b",
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

	// useEffect(() => {
	// 	generateQuote();
	// }, []);

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
		<LinearGradient
			colors={["#f0f4ff", "#bfd7ef", "#9bbbea"]}
			style={styles.container}
		>
			<LinearGradient colors={["#031b3b", "#233b5b"]} style={styles.magic8ball}>
				<View style={styles.textContainer}>
					{quote.content ? (
						<Text style={styles.quoteText}>{quote.content}</Text>
					) : (
						<Text style={styles.introText}>Get your quote for today</Text>
					)}
				</View>
			</LinearGradient>
			{/* <Text>Author: {quote.author}</Text> */}
			<Text style={styles.shakeText}>Shake to start</Text>
			{/* <Mobile /> */}
		</LinearGradient>
	);
};
