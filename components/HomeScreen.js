import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import LottieLoader from './LottieLoader';
import Cinema from '../assets/cinema.jpg';
// Styling-components
import {
  HomeMainContainer,
  MovieButton,
  MovieButtonText,
} from '../styled-components/styles';

const API_KEY = '29ee910f5072fe7c4bc00a08633532c0';
const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

const HomeScreen = ({ navigation }) => {
  const [randomMovie, setRandomMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   navigation.setOptions({ headerShown: false });
  // }, []);

  useEffect(() => {
    fetch(BASE_URL)
      .then(result => result.json())
      .then(json => {
        //setMovies(json.results);
        setRandomMovie(
          json.results[Math.floor(Math.random() * json.results.length)]
        );
        setIsLoading(false);
      });

    // .then(result => {
    //   if (result.ok) {
    //     return result.json;
    //   } else {
    //     throw new Error('404');
    //   }
    // })
    // .then(json => {
    //   setMovies(json.results);
    //   setRandomMovie(movies[Math.floor(Math.random() * movies.length)]);
    //   setIsLoading(false);
    // })
    // .catch(() => {
    //   console.error('error');
    // });
  }, []);

  return (
    <>
      {isLoading ? (
        <LottieLoader />
      ) : (
        <HomeMainContainer source={Cinema}>
          <MovieButton
            onPress={() => {
              navigation.navigate('Movie Detail', {
                itemId: randomMovie.id,
              });
            }}
          >
            <MovieButtonText>Shake to find random movie</MovieButtonText>
          </MovieButton>
        </HomeMainContainer>
      )}
    </>
  );
};

export default HomeScreen;

const Title = styled.Text`
  font-size: 20px;
  color: darkred;
  font-weight: bold;
`;

// const MovieButton = styled.TouchableOpacity`
//   padding: 20px
//   width: 90%;
//   border-radius: 10px;
//   border: 2px solid darkred;
//   background-color: rgba(0, 0, 0, 0.5);
//   text-align: center;
// `;
