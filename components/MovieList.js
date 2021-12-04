import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import {
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { MOVIES_URL, CHRISTMAS_URL, TOP_RATED_URL } from '../utils/urls';
import { useFonts } from 'expo-font';

//added custom fonts
export const MovieList = ({ route, navigation }) => {
    const [loaded] = useFonts({
        AdventPro: require('../assets/fonts/AdventPro-Bold.ttf'),
    });


    const { listId } = route.params;
    let url = MOVIES_URL;
    if (listId === 'christmas') {
        url = CHRISTMAS_URL;
    }
    else if (listId === 'toprated') {
        url = TOP_RATED_URL;
    }

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setList(data.results));
    }, []);

      //here we render the main page (very similar to the movie project)
    return (
        <MoviesView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            {
                list.map((movie) => (
                    <TouchableOpacity key={movie.id} onPress={() =>
                        navigation.navigate('Details', { movieId: movie.id, screen: 'List' })
                    }>
                        <Image
                            style={styles.moviePoster}
                            source={{
                                uri: `https://image.tmdb.org/t/p/w780${movie.poster_path}`,
                            }} />
                        <MovieTitle style={styles.title}>{movie.title}</MovieTitle>
                    </TouchableOpacity>
                ))
            }
        </MoviesView >
    );
}


// Styled components
const MoviesView = styled.ScrollView`
background-color: black;
    `;

const styles = StyleSheet.create({
    moviePoster: {
        width: '100%',
        height: 500,
    }, container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'black',
        marginHorizontal: 10,
    },
    title: {
        fontFamily: 'AdventPro',
    }

});
const MovieTitle = styled.Text`
      color: white;
      font-size: 18px;
      font-weight: bold;
      margin: 10px auto;
      text-align:center;
      background-color: black;
      text-transform: uppercase;
      font-family: 'AdventPro';
      `;
