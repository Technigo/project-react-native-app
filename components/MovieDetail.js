import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import LottieLoader from './LottieLoader';
import ShareButton from './ShareButton';
import { API_KEY } from '../api.js';
import {
  DetailMainContainer,
  DetailBackgroundImage,
  DetailContainer,
  MovieTitle,
  MovieTagline,
  MovieText,
} from '../styled-components/styles';

const MovieDetail = ({ route }) => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = route.params;

  const DETAIL_URL = `https://api.themoviedb.org/3/movie/${itemId}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    fetch(DETAIL_URL)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        setMovieDetail(json);
        setIsLoading(false);
      })
      .catch(() => {
        console.log('error');
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <LottieLoader />
      ) : (
        <DetailMainContainer>
          <DetailBackgroundImage
            source={{
              uri: `https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`,
            }}
          >
            <DetailContainer>
              <ShareButton
                sharedMovie={`https://www.imdb.com/title/${movieDetail.imdb_id}/`}
              />
              <View>
                <MovieTitle>{movieDetail.original_title}</MovieTitle>
                <MovieTagline>{movieDetail.tagline}</MovieTagline>
                <MovieText> ⭐️ {movieDetail.vote_average} / 10 </MovieText>
                <MovieText>{movieDetail.overview}</MovieText>
              </View>
            </DetailContainer>
          </DetailBackgroundImage>
        </DetailMainContainer>
      )}
    </>
  );
};

export default MovieDetail;
