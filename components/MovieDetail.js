import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import LottieLoader from './LottieLoader';
import Lottie from './LottieLoader';

const MovieDetail = ({ route }) => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = route.params;

  console.log(itemId);

  const API_KEY = '29ee910f5072fe7c4bc00a08633532c0';
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${itemId}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    fetch(MOVIE_URL)
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
  console.log(movieDetail);

  return (
    <>
      {/* {isLoading &&  <LottieLoader />} */}

      {isLoading ? (
        <LottieLoader />
      ) : (
        <MainContainer>
          <BackgroundImage
            source={{
              uri: `https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`,
            }}
          >
            <DetailContainer>
              <MovieTitle>{movieDetail.original_title}</MovieTitle>
              <MovieText>{movieDetail.tagline}</MovieText>
              <MovieText> ⭐️ {movieDetail.vote_average} / 10 </MovieText>
              <MovieText>{movieDetail.overview}</MovieText>
            </DetailContainer>
          </BackgroundImage>
        </MainContainer>
      )}
    </>
  );
};

export default MovieDetail;

const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  object-fit: cover;
  width: 100%;
  justify-content: center;
`;

const DetailContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  flex: 1;
  justify-content: flex-end;
  padding: 20px;
`;

const MovieTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

const MovieText = styled.Text`
  color: #fff;
  margin-bottom: 10px;
  font-size: 16px;
`;
