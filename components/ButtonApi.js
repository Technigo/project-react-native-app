import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	Button,
	Linking,
	Image,
	ImageBackground,
} from 'react-native';
import styled from 'styled-components/native';
import * as Location from 'expo-location';

const QuoteText = styled.Text`
	font-weight: 700;
`;

const APIButton = styled.TouchableOpacity`
	background-color: powderblue;
	width: 50%;
	align-items: center;
	justify-content: center;
	display: flex;
`;

const TechnigoImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const ScreenBackground = styled.ImageBackground`
	height: 100%;
`;

const ButtonApi = () => {
	const [quote, setQuote] = useState({}); //a state with an empty object to store the API data
	const [loading, setLoading] = useState(false);
	const [location, setLocation] = useState({});

	useEffect(() => {
		generateQuote();
	}, []);

	// (() => {
	//     console.log('hello')
	// })();

	const generateQuote = () => {
		setLoading(true);
		fetch('http://api.quotable.io/random')
			.then((res) => res.json())
			//data (quote) we recieve in the second then
			.then((quote) => setQuote(quote))
			.finally(() => setLoading(false));
	};

	//v1 - Promise
	const getLocation = () => {
		// let data triggering the pop-up asking for location permisson
		Location.requestForegroundPermissionsAsync()
			.then((data) => {
				//Depending on the status, it could be granted or rejected
				if (data !== 'granted') {
					//setErrorMsg
					console.log('Permission to access location was denied');
				} else {
					return Location.getCurrentPositionAsync({});
				}
			})
			.then((locationData) => {
				Linking.openURL(
					`http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`
				);
			});
	};

	// v2 Async await
	// const getLocation = async () => {
	// 	const data = await Location.requestBackgroundPermissionsAsync();
	// 	if (data.status !== 'granted') {
	// 		console.log('Permisson to access location was denied');
	// 	} else {
	// 		const locationData = await Location.getCurrentPositionAsync({});
	// 		Linking.openURL(
	//`http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`
	//  );
	// 	}
	// };

	if (loading) {
		return <ActivityIndicator />;
	}

	return (
		<ScreenBackground source={require('../assets/splash.png')}>
			<Text>Click button to generate quote!</Text>
			<APIButton onPress={generateQuote}>
				<Text> Click </Text>
			</APIButton>
			<QuoteText> Quote: {quote.content} </QuoteText>
			<Text> Author: {quote.author} </Text>
			<Button title="Get location" onPress={getLocation} />
			<TechnigoImage
				source={require('../assets/favicon.png')}
				resizeMode="contain"
			/>
		</ScreenBackground>
	);
};

export default ButtonApi;

//Get image dimensions
//Image.getSize(myUri,(width, height) => {this.setState({width, height})});
