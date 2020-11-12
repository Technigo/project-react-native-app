import React, { useState, useEffect } from 'react';

import styled from 'styled-components/native';
import Lottie from './Lottie';

const MovieList = ({ navigation }) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '175ffd5710eba9b52b1d7f46de42a152';
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    fetch(API_URL)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('404')
      }
    })
    .then(json => {
      setMovieList(json.results)
      setLoading(false)
    })
    .catch(() => {
      console.log('error')
    })
  }, [])
  //console.log(movieList)

  return (
    <ListContainer>
      {loading && <Lottie />}
      {!loading && 
        <>
          {movieList.map(movie => (
            <Button
              key={movie.id}
              onPress={() => navigation.navigate('Movie detail', {itemId: movie.id,})}
              >
              <Title>{movie.original_title}</Title>
            </Button> 
          ))}
        </>
      }
    </ListContainer>
  )
}
export default MovieList

const ListContainer = styled.ScrollView `
background-color: #000;
flex: 1;
`
const Button = styled.TouchableOpacity `
  padding: 10px;
  margin-bottom: 10px;
  width: 90%;
  border-radius: 10px;
  align-self: center; 
  align-items: center; 
  border: 1px solid #571E59;
`
const Title = styled.Text `
color: #F8F2E7;
font-size: 16px;
font-weight: bold;
`