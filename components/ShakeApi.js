import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';
import { useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

const ScreenBackground = styled.ImageBackground`
	height: 100%;
	resize-mode: center;
`;

const MainView = styled.View`
	display: flex;
	align-items: center;
`
const MovieView = styled.View`
	display: flex;
	justify-content: center;
	flex-direction:row
	width: 100%;
`
const TextView = styled.View`
	justify-content: center;
	width: 40%;
	margin: 5px;
`
const MovieTitle = styled.Text`
	padding: 3px;
`
const Animation = styled.Image`
	width: 150px;
	height: 150px;
`
const MovieImage = styled.Image`
	width: 60%;
	height: 300px;
	resize-mode: center;
`
const MovieText = styled.Text`
	padding: 3px;
	font-weight: bold;
	textShadowColor: #ffffff8C;
  textShadowOffset: {width: -1, height: 1};
  textShadowRadius: 10px;
`

const ShakeApi = () => {
	const [data, setData] = useState({
		x: 0,
		y: 0,
		z: 0,
	});
	const [movie, setMovie] = useState([]);
	const [loading, setLoading] = useState(false);
	const [subscription, setSubscription] = useState(null);
	const [fontsLoaded] = useFonts({
		Montserrat_500Medium,
	});

	useEffect(() => {
		generateMovie();
	}, []);

	useEffect(() => {
		Accelerometer.setUpdateInterval(1000);
		subscribe();
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (isShakingEnough(data)) {
			generateMovie();
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

// Randomize the id in the fetch
	const array = ['2baf70d1-42bb-4437-b551-e5fed5a87abe', '12cfb892-aac0-4c5b-94af-521852e46d6a', '58611129-2dbc-4a81-a72f-77ddfc1b1b49', 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e', '4e236f34-b981-41c3-8c65-f8c9000b94e7', 'ebbb6b7c-945c-41ee-a792-de0e43191bd8', '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c', 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3', '0440483e-ca0e-4120-8c50-4c8cd9b965d6', '45204234-adfd-45cb-a505-a8e7a676b114', 'dc2e6bd1-8156-4886-adff-b39e6043af0c', '90b72513-afd4-4570-84de-a56c312fdf81', 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa', '112c1e67-726f-40b1-ac17-6974127bb9b9', '758bf02e-3122-46e0-884e-67cf83df1786', '2de9426b-914a-4a06-a3a0-5e6d9d3886f6', '45db04e4-304a-4933-9823-33f389e8d74d', '67405111-37a5-438f-81cc-4666af60c800', '578ae244-7750-4d9f-867b-f3cd3d6fecf4', '5fdfb320-2a02-49a7-94ff-5ca418cae602', 'd868e6ec-c44a-405b-8fa6-f7f0f8cfb500']
	const listArray = array => {
		const randomIndex = Math.floor(Math.random() * array.length)
		return array[randomIndex]
	}

	const generateMovie = () => {
		setLoading(true);
		fetch(`https://ghibliapi.herokuapp.com/films/${listArray(array)}`)
			.then((res) => res.json())
			.then((data) => setMovie(data))
			.finally(() => setLoading(false))
	};



	const isShakingEnough = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
		return totalForce > 1.78;
	};

	if (loading || !fontsLoaded) {
		return <ActivityIndicator />;
	}

	return (
		<>
		<ScreenBackground source={require('../assets/background.jpg')}>
			<MainView >
			<Animation source={require('../assets/ghibli.gif')} />
				<View style={{backgroundColor: '#ffffff8C', margin: '5px', padding: '5px', border: 'solid 2px black'}}>
					<MovieView>
						<MovieImage source={{uri: `${movie.image}` }} />
						<TextView>
								<Text style={{fontWeight: 'bold', fontFamily: 'Montserrat_500Medium'}}>Title:</Text>
								<MovieTitle style={{fontFamily: 'Montserrat_500Medium'}}> {movie.title}</MovieTitle>
								<Text style={{fontWeight: 'bold', fontFamily: 'Montserrat_500Medium'}}>Original title:</Text>
								<MovieTitle style={{fontFamily: 'Montserrat_500Medium'}}> {movie.original_title}</MovieTitle>
								<Text style={{fontWeight: 'bold', fontFamily: 'Montserrat_500Medium'}}>Release date:</Text>
								<MovieTitle style={{fontFamily: 'Montserrat_500Medium'}}> {movie.release_date}</MovieTitle>
						</TextView>
					</MovieView>
				<MovieText style={{fontFamily: 'Montserrat_500Medium'}}>{movie.description}</MovieText>
				</View>
			</MainView>
			</ScreenBackground>
		</>
	);
};

export default ShakeApi;
