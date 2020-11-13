import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
//import { LinearGradient } from 'expo-linear-gradient';

import LottieLoader from './LottieLoader';
import ShareButton from './ShareButton';
// Styling-components
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

const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// const DetailBackgroundImage = styled.ImageBackground`
//   flex: 1;
//   object-fit: cover;
//   width: 100%;
//   justify-content: center;
// `;

// const DetailContainer = styled.View`
//   flex: 1;
//   justify-content: space-between;
//   padding: 20px;
//   background-color: rgba(0, 0, 0, 0.7);
// `;

const RoundedButton = styled.TouchableOpacity`
  width: 90%;
  padding: 20px;
  margin-top: 10px;
  border-radius: 20px;
  background: #fafafa;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  align-self: flex-start;
`;

const ActiveRoundedButton = styled(RoundedButton)`
  background: #454cd8;
`;

// const MovieTitle = styled.Text`
//   font-size: 28px;
//   font-weight: bold;
//   color: #fff;
//   margin-bottom: 10px;
// `;

// const MovieText = styled.Text`
//   color: #fff;
//   margin-bottom: 10px;
//   font-size: 16px;
// `;
