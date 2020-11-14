import React, { useState, useEffect } from 'react';

import Lottie from './Lottie';
import ShareMovieButton from './ShareMovieButton';
import { 
  DetailsContainer, 
  MovieImage, 
  DetailsWrapper, 
  DetailsTitle, 
  Paragraph, 
  ItalicParagraph,
} from '../styled-components/styles';

const MovieDetail = ({ route }) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = route.params;

  const API_KEY = '175ffd5710eba9b52b1d7f46de42a152';
  const Detail_URL = `https://api.themoviedb.org/3/movie/${itemId}?api_key=${API_KEY}&language=en-US`;

    useEffect(() => {
      fetch(Detail_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
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
      })
    }, []);
    
  return (
    <>
      {isLoading ? <Lottie /> : (
        <DetailsContainer>
          <MovieImage source={{uri: `https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}}>
            <ShareMovieButton
                movieToShare={`https://www.imdb.com/title/${movieDetail.imdb_id}/`}
            />
            <DetailsWrapper>
              <DetailsTitle>{movieDetail.original_title}</DetailsTitle>
              <ItalicParagraph>{movieDetail.tagline}</ItalicParagraph>
              <Paragraph> ⭐️  {movieDetail.vote_average} / 10 </Paragraph>
              <Paragraph>{movieDetail.overview}</Paragraph>
              <ItalicParagraph>Released: {movieDetail.release_date}</ItalicParagraph>
            </DetailsWrapper>
          </MovieImage>  
        </DetailsContainer>  
      )}
    </>
  );
};
export default MovieDetail;