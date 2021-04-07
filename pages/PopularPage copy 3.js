import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'

const API_Key = '2e6a7b75ad4d088fae1f52620044bef7'
const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=2365aea36d60ef1f206bd1bdf23fd999'

const Image = styled.Image`
  width: 250px;
  height: 250px;
`


const Popular = () => {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState([])

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((json) => {
      setMovies(json.results)
      setTitle(json.results[0])
    }
    )
  }, [])

  console.log(movies[0])
  console.log(title.poster_path)
  //console.log(title.original_title)

  //const (`https://image.tmdb.org/t/p/w300/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg`)
  
  return (
        <View >
          {movies.map((movie) => (
              <Image source={{ uri:`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}}
              />
        ))}
        </View>
  )
}

export default Popular


