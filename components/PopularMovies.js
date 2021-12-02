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
	StyleSheet, 
	Share
} from 'react-native';
import styled from 'styled-components/native';

import { POPULAR_URL } from '../utils/urls';

const PopularMovies = () => {

	const [movieList, setMovieList] = useState([]);
	const [loading, setLoading] = useState(false);

	// random movie from movieList array, returns only one item
	const randomMovie = movieList[Math.floor(Math.random() * 	movieList.length)]
	console.log(randomMovie)

	useEffect(() => {
		generateMovie();
	}, []);

	const generateMovie = () => {
		fetch(POPULAR_URL)
			.then((res) => res.json())
			.then((json) => {
				setMovieList(json.results);
				setLoading(true)
			})
			.finally(() => setLoading(false))
	};

	// share function, that gives possibility to share directly from your phone and send a message with movie title 
	const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hey! I found a great movie for tonight! It called ${randomMovie.title}. Can you buy popcorn?`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
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
								<Text style={styles.title}>NEXT</Text>
							</APIButton>
							<ShareButton onPress={onShare}>
								<Text style={styles.title}>Share</Text>
							</ShareButton>
						</Container>
						</ScrollView> 
				</SafeAreaView>
		 	}
		</>
	)
};

export default PopularMovies;

// STYLING
const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: "black",
		paddingTop: StatusBar.currentHeight,

  },
  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 20,
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
	width: 40%;
	background-color: red;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 20px;
`;

const ShareButton = styled.TouchableOpacity`
	width: 40%;
	background-color: red;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 70px;
`;