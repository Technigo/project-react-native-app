import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { Text, Image, View, StyleSheet, Button } from 'react-native';
import { DETAILS_URL } from '../utils/urls';

const styles = StyleSheet.create({
    moviePoster: {
        width: '100%',
        height: 350,
    },
});

export const MovieDetails = ({ route, navigation }) => {
    const { movieId } = route.params;
    const [details, setDetails] = useState();

	useEffect(() => {
		fetch(DETAILS_URL(movieId))
			.then((res) => res.json())
			.then((data) => {
                setDetails(data);
				
				});
	}, [movieId]);

return(

    // <div className="detailsPage">
	// 	<i className="fas fa-chevron-circle-left" onClick={onButtonBackClick}></i>
	// 	<button className="back-btn" onClick={onButtonBackClick}>Movies</button>
	// 	{details && (

	// 	<div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>      {/* <gradient to get black fading /> */}
	// 		<div className="summary">
    //         <img src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}  alt={details.title} />
    //         	<div className="details">
    //           	<h1>{details.title} <span className="rating">{details.vote_average}/10</span></h1>
    //           	<p>{details.overview}</p>
    //       		</div>
	// 		</div>
	// 	</div>
	// 		)}
	// </div>

<View>

    {details && (
        <View>
            <Button onPress={()=>navigation.goBack()} title="Back" />
        <Text>{details.title}</Text>
        <Image
                            style={styles.moviePoster}
                            source={{
                                uri: `https://image.tmdb.org/t/p/w780${details.poster_path}`,
                            }} />

                            <Text>{details.overview}</Text>
        </View>
        )
        }
</View>
)
};