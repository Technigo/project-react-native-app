import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';


const MovieView = styled.View`
	display: flex;
	margin: 10px;
	justify-content: center;
	align-items: center;
	border: solid 2px blue;
	width: 80%;
	height: 80%;
`
const MovieText = styled.Text`
	font-weight: 700;
	border: solid 2px black;
`;
const Animation = styled.Image`
	width: 250px;
	height: 250px;
`
const BurgerImage = styled.Image`
	width: 100%;
	height: 100%;
	resize-mode: center;
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

	const generateMovie = () => {
		// const randomNum = Math.floor(Math.random()*data.length)
		// 	document.querySelector('.title').textContent = (data[randomNum].title),
		// 	document.querySelector('.description').textContent = (data[randomNum].description)
		// setLoading(true);
		fetch(`https://ghibliapi.herokuapp.com/films`)
			.then((res) => res.json())
			.then((data) => setMovie(data),
			
			// const quotes = [{},..];
			// const quote = quotes[Math.floor(Math.random() * quotes.length)];
			)
			.finally(() => setLoading(false))
	};



	const isShakingEnough = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
		return totalForce > 1.78;
	};

	if (loading) {
		return <ActivityIndicator />;
	}

	return (
		<>
		<Animation source={require('../assets/ghibli.gif')} />
		<MovieView key={movie.id}>
			<MovieText>Title: {movie.title}</MovieText>
				<BurgerImage source={{uri: `${movie.image}` }} />
					<MovieText>{movie.description}</MovieText>
		</MovieView>
		</>
	);
};

export default ShakeApi;
