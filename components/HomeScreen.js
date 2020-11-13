import React, { useState, useEffect } from 'react';

import LottieLoader from './LottieLoader';
import Cinema from '../assets/cinema.jpg';
import { API_KEY } from '../api.js';
import {
  HomeMainContainer,
  ButtonMovie,
  ButtonMovieText,
} from '../styled-components/styles';

const MOVIE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

const HomeScreen = ({ navigation }) => {
  const [randomMovie, setRandomMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomMovie = () => {
    fetch(MOVIE_URL)
      .then(result => result.json())
      .then(json => {
        setRandomMovie(
          json.results[Math.floor(Math.random() * json.results.length)]
        );
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  // useEffect(() => {
  //   fetch(MOVIE_URL)
  //     .then(result => result.json())
  //     .then(json => {
  //       setRandomMovie(
  //         json.results[Math.floor(Math.random() * json.results.length)]
  //       );
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <>
      {isLoading ? (
        <LottieLoader />
      ) : (
        <HomeMainContainer source={Cinema}>
          <ButtonMovie
            onPress={() => {
              fetchRandomMovie();
              navigation.navigate('Movie Detail', {
                itemId: randomMovie.id,
              });
            }}
          >
            <ButtonMovieText>Shake to find random movie</ButtonMovieText>
          </ButtonMovie>
        </HomeMainContainer>
      )}
    </>
  );
};

export default HomeScreen;
