import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { Text, Image, View, StyleSheet } from 'react-native';
import { MOVIES_URL } from '../utils/urls';


// = Styled components
const MoviesView = styled.View`
        display: flex;
        flex-direction: column;
    `;
const styles = StyleSheet.create({
    moviePoster: {
        width: 300,
        height: 300,
    },
});

export const MovieList = ({ navigation }) => {


    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(MOVIES_URL)
            .then((res) => res.json())
            .then((data) => setList(data.results));
    }, []);

    return (
        <MoviesView >
            {
                list.map((movie) => (
                    <View key={movie.id}>
                        <Image
                            style={styles.moviePoster}
                            source={{
                                uri: `https://image.tmdb.org/t/p/w780${movie.poster_path}`,
                            }} />
                        <Text>{movie.title}</Text>
                    </View>
                ))
            }
        </MoviesView >
    );
};
