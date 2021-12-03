import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MOVIES_URL, CHRISTMAS_URL, TOP_RATED_URL } from '../utils/urls';

// = Styled components
const MoviesView = styled.ScrollView`

    `;
const styles = StyleSheet.create({
    moviePoster: {
        width: '100%',
        height: 350,
    },
});

export const MovieList = ({ route, navigation }) => {

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

    return (
        <MoviesView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            {
                list.map((movie) => (
                    <TouchableOpacity key={movie.id} onPress={() =>
                        navigation.navigate('Details', { movieId: movie.id })
                    }>
                        <Image
                            style={styles.moviePoster}
                            source={{
                                uri: `https://image.tmdb.org/t/p/w780${movie.poster_path}`,
                            }} />
                        <Text>{movie.title}</Text>
                    </TouchableOpacity>
                ))
            }
        </MoviesView >
    );
}