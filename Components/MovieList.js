import React, { useState, useEffect } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import Lottie from './Lottie';
import { ListContainer, ListView, Button, Title } from '../styled-components/styles';

const MovieList = ({ navigation }) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = '175ffd5710eba9b52b1d7f46de42a152';
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    fetch(API_URL)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('404');
      }
    })
    .then(json => {
      setMovieList(json.results);
      setIsLoading(false);
    })
    .catch(() => {
      console.log('error');
    });
  }, []);

  return (
    <>
     {isLoading ? <Lottie /> : (
      <ListContainer>
        <LinearGradient 
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={{ 
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 500,
          }}  
        />
        <ListView>
        {movieList.map(movie => (
          <Button
            key={movie.id}
            onPress={() => navigation.navigate('Movie detail', {itemId: movie.id,})}
          >
            <Title>{movie.original_title}</Title>
          </Button> 
        ))}
        </ListView>
      </ListContainer>
      )}  
    </>
  );
};
export default MovieList;