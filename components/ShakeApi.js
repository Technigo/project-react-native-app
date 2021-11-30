import React, {useState, useEffect} from 'react';
// importing core componenets from react native
import { View, Text, ActivityIndicator, Image, Button, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';

import { FETCH_URL } from '../utils/urls';

const ShakeApi = () => {

	const [movieList, setMovieList] = useState([]);
	const [loading, setLoading] = useState(false);
	// representation of our phone 3 demension
	// tracking the current position of the phone
	const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

	// communication that we have between sensor that checks where our phone is located and our code
	// subscription is about our code telling from now on (maybe todays date) I would like to contantly get information about the position of the phone
  const [subscription, setSubscription] = useState(null);

	// random movie from movieList array, returns only one item
	const randomMovielist = movieList[Math.floor(Math.random() * 	movieList.length)]

	//useEffect(() => {
	//	generateMovie();
	//}, []);

	useEffect(() => {
		Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

	useEffect(() => {
    if(isShakingEnough(data)) {
			generateMovie()
		}
  }, [data]);

	const generateMovie = () => {
		setLoading(true);
		fetch(FETCH_URL)
			.then((res) => res.json())
			.then((json) => setMovieList(json.results))
			.finally(() => setLoading(false))
	};

	if(loading) {
		return <ActivityIndicator />
	}

	const isShakingEnough = (data) => {
		const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
		return totalForce > 1.78;
	};
	// this function asks iphone please from now on keep me updated 
  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };
// dont inform me about the subscription 
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

	return (
		<Container>
		{!randomMovielist &&
		<> 
			<TitleText>Shake your phone to see a random movie</TitleText>
		</>
		}
		{randomMovielist && 
			<View>
				<TitleText>{randomMovielist.title}</TitleText>
				<Description>{randomMovielist.overview}</Description>
				<Rate>Rate: {randomMovielist.vote_average}</Rate>
				<MovieImage 
					source={{uri:`https://image.tmdb.org/t/p/w500/${randomMovielist.poster_path}`}} /> 
			</View>
		}
		</Container>
	)
};

export default ShakeApi;

// STYLING
const Container = styled.View`
	flex: 1;
	background-color: black;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const TitleText = styled.Text`
	color: white;
	font-size: 30px;
`;

const Description = styled.Text`
	font-size: 16px;
	color: white;
`;

const Rate = styled.Text`
	font-size: 16px;
	color: yellow;
`;

const MovieImage = styled.Image`
	width: 300px;
	height: 500px;
`;

const APIButton = styled.TouchableOpacity`
	width: 50%;
	background-color: green;
`;

	// slow and fast is responsible for telling accelometer how often should it check when position changes
  //const _slow = () => {
  //  Accelerometer.setUpdateInterval(1000);
  //};

  //const _fast = () => {
  //  Accelerometer.setUpdateInterval(16);
  //};