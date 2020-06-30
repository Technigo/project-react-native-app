import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
import 'react-native-gesture-handler'
import styled from 'styled-components/native'


// Styled components

const Main = styled.View`
 
`

const MovieDetails = styled.View`
  padding: 5px;
  backgroundColor: white;
  borderRadius: 6px;
`

const MovieImage = styled.Image`
  width: 100%;
  margin: auto;
  height: 500px;
`

const MovieTitle = styled.Text`
  fontSize: 24px;
  color: darkgrey;
  marginTop: 5px;
  marginRight: 15px;
  marginLeft: 15px;
  marginBottom: 15px;
`
const MovieRelease = styled.Text`
  fontSize: 18px;
  color: palevioletred;
  marginTop: 0;
  marginRight: 15px;
  marginLeft: 15px;
  marginBottom: 15px;
`

const Label = styled.Text`
  fontSize: 24px;
  marginTop: 15px;
  marginRight: auto;
  marginLeft: auto;
  marginBottom: 15px;
  textTransform: uppercase;
  color: palevioletred;
`

const Button = styled.TouchableOpacity`
  background: #f2f2f2;
  padding: 8px;
  color: white;
`

export const Movies = ({ navigation }) => {
  const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8fe2cb625158d587f8b0296620d5d249&language=en-US&page=1')
          .then(res => res.json())
          .then(json => setMovies(json.results))          
    }, [])
    
    return (
      <ScrollView>
        <Label>Popular movies</Label>
        <Main>
          {movies.map((movie) => (
            <Button key={movie.id} onPress={() => navigation.navigate('Details', { movie })} >
              <MovieDetails>
              <MovieImage
                source={{
                uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
                }}
              />
                {/* <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} /> */}
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieRelease>Released {movie.release_date}</MovieRelease>
              </MovieDetails>
            </Button> 
          ))} 
        </Main>
       </ScrollView>
   )
  }


