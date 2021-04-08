import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styled from 'styled-components/native'


const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=2365aea36d60ef1f206bd1bdf23fd999'


const ImageGallery = () => {
    const [movies, setMovies] = useState([])
    const [test, setTest] = useState([])

    useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((json) => 
          {
            setMovies(json.results)
            setTest(json.results[0])
          }
        
        )
      }, [])

      console.log(movies)

      const Container = styled.View`
      flex:1`

const MyBackground = styled.ImageBackground`
flex:1
height: 800px
`

  return (
    <Container >
      
      {movies.map(movie => (
          <MyBackground
          source={{ uri:`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}}
          ></MyBackground>
      ))}
      
    </Container>
  )
}

export default ImageGallery


//source={{ uri:`https://image.tmdb.org/t/p/w1280/${details.poster_path}`}}




