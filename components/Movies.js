import React, {useState, useEffect} from 'react';
// importing core componenets from react native
import {
	View, 
	Text, 
	ActivityIndicator, 
	Image, 
	Button, 
	TouchableOpacity, 
	ScrollView, 
	StatusBar,
	SafeAreaView,
	StyleSheet
} from 'react-native';
import styled from 'styled-components/native';

import { FETCH_URL } from '../utils/urls';

const Movies = () => {

	const [movieList, setMovieList] = useState([]);
	const [loading, setLoading] = useState(false);

	// random movie from movieList array, returns only one item
	const randomMovie = movieList[Math.floor(Math.random() * 	movieList.length)]
	console.log(randomMovie)

	useEffect(() => {
		generateMovie();
	}, []);

	const generateMovie = () => {
		setLoading(true);
		fetch(FETCH_URL)
			.then((res) => res.json())
			// random movie from movieList array, returns only one item
			.then((json) => setMovieList(json.results))
			.finally(() => setLoading(false))
	};

	if(loading) {
		return <ActivityIndicator />
	};

	return (
		<>
			{randomMovie && 
				<SafeAreaView style={styles.container}>
					<ScrollView style={styles.scrollView}>
						<Container>
							<MovieImage 
								source={{uri:`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`}} />
							<TitleText>{randomMovie.title}</TitleText>
							<Description>{randomMovie.overview}</Description>
							<Rate>Rate: {randomMovie.vote_average}</Rate>

							<APIButton onPress={generateMovie}>
								<Text style={styles.title}>Give me more tips!</Text>
							</APIButton>
						</Container>
						</ScrollView> 
				</SafeAreaView>
		 	}
		</>
	)
};

export default Movies;

// STYLING
const styles = StyleSheet.create({
  /*Styling for ScrollView*/
  container: {
    flex: 1,
		backgroundColor: "black",
		paddingBottom: 50
  },
  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 0,
  },
	title: {
		color: "white",
		fontSize: 20,
		textAlign: "center"
	},
});

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
	font-weight: bold;
	margin: 10px auto;
	text-align:center;

`;

const Description = styled.Text`
	font-size: 16px;
	color: white;
	text-align: center;
	width: 90%;
`;

const Rate = styled.Text`
	font-size: 16px;
	color: yellow;
	margin: 20px auto;
`;

const MovieImage = styled.Image`
	width: 300px;
	height: 500px;
`;

const APIButton = styled.TouchableOpacity`
	width: 50%;
	background-color: red;
	padding: 10px;
	border-radius: 5px;

`;
