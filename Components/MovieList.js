import React, { useState, useEffect } from 'react'

import styled from 'styled-components/native' 
import { Text, ScrollView} from 'react-native';
//import Constants from "expo-constants";
//import { render } from 'react-dom';

const MovieList = ({ navigation }) => {
  const [movieList, setMovieList] = useState([])
  //const [loading, setLoading] = useState(true)

  const API_KEY = '175ffd5710eba9b52b1d7f46de42a152';
  const API_URL = `https://api.themoviedb.org	/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;

    // useEffect(() => {
    // fetch(API_URL)
    //   .then(res => res.json())
    //   .then(json => setMovieList(json.results))
    //   console.log(movieList) //problem att jag får tillbaka en tom array, vilket gör att mobilappen visar tom sida på "now playing"
    // }, [API_URL])

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
      setMovieList(json)
      //setLoading(false)
    })
    .catch(() => {
      console.log('error')
    })
  }, [API_URL])


  return (
    <ScrollView>
      {movieList.map((movie) => (
        <Button
        key={movie.id}
        onPress={() => navigation.navigate('Movie detail', {itemId: movie.id,})}
        //onPress={() => navigation.navigate('Movie detail', { movie })}
        >
        <Text>{movie.original_title}</Text>
        </Button>
      ))}
    </ScrollView>
  )
}
export default MovieList

const Button = styled.TouchableOpacity `
  padding: 10px;
  margin-bottom: 10px;
  width: 90%;
  border-radius: 10px;
  align-self: center; 
  align-items: center; 
  border: 1px solid #000;
`
