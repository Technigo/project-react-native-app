import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';


const API_Key = '2e6a7b75ad4d088fae1f52620044bef7'
const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=2365aea36d60ef1f206bd1bdf23fd999'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Container = styled.ScrollView`
flex: 1;
`

const Top = styled.ImageBackground`
width: ${props => windowWidth};
height: ${props => windowHeight};
justify-content: center;
align-items: center;
margin: 0px
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
        <Container horizontal={true}
        >


          {movies.map((movie) => (
           
              <Top
              resizeMode="contain"
              aspectRatio="1"
              source={{ uri:`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}} />
            
         
          ))}


        </Container>
  )
}

export default Popular


