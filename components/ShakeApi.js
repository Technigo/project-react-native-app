import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';
import { useFonts, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

//styled components
const QuoteContainer = styled.View`
	padding: 5px;
	align-items: center;
`;

const ContainerLoading = styled.View`
	margin: 0 auto;
`;

const ShakeApi = () => {
	//----USESTATE----
	//a state with defaults the movement to 0
	const [data, setData] = useState({
		x: 0,
		y: 0,
		z: 0,
	});
	const [quote, setQuote] = useState({}); // a state with an empty object to store the API data
	const [loading, setLoading] = useState(false); // sets the loading to false
	const [subscription, setSubscription] = useState(null); //for the accelerator
	let [fontsLoaded] = useFonts({
		AmaticSC_700Bold,
		AmaticSC_400Regular, //for the custom imported font
	});

	//----USEEFFECT----
	useEffect(() => {
		//generates the quote
		generateQuote();
	}, []);

	//when mounted accelermeter subscribes, and when unmounted it unsubscribes
	useEffect(() => {
		Accelerometer.setUpdateInterval(1000);
		subscribe();
		return () => unsubscribe();
	}, []);

	//determines if the shaking is enough
	useEffect(() => {
		if (isShakingEnough(data)) {
			generateQuote();
		}
	}, [data]);

	//----FUNCTIONS----

	// updates about the change of the position
	const subscribe = () => {
		setSubscription(
			Accelerometer.addListener((accelerometerData) => {
				setData(accelerometerData);
			})
		);
	};

	//If there is no shake, no need to update
	const unsubscribe = () => {
		subscription && subscription.remove();
		setSubscription(null);
	};

	const generateQuote = () => {
		//fetches the quotes from API
		setLoading(true);
		fetch('https://www.affirmations.dev/')
			.then((res) => res.json())
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

	if (loading || !fontsLoaded) {
		return (
			<ContainerLoading>
				<Text
					style={{
						fontFamily: 'AmaticSC_700Bold',
						color: 'white',
						fontSize: 45,
						textAlign: 'center',
						justifyContent: 'center',
						margin: 3,
					}}
				>
					{' '}
					Shake for more Affirmations 🙏{' '}
				</Text>
				<ActivityIndicator />
			</ContainerLoading>
		);
	}

	return (
		<QuoteContainer>
			<Text
				style={{
					fontFamily: 'AmaticSC_700Bold',
					color: 'white',
					fontSize: 45,
					textAlign: 'center',
					justifyContent: 'center',
					margin: 3,
					fontWeight: 'normal',
				}}
			>
				{quote.affirmation}
			</Text>
		</QuoteContainer>
	);
};

export default ShakeApi;
