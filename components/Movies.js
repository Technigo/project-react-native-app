import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Image } from 'react-native'
import 'react-native-gesture-handler'
import styled from 'styled-components/native'


// Styled components

const Main = styled.View`
  display: flex;
  flexDirection: 'column',
  justifyContent: 'space-between',
`

const MovieDetails = styled.View`
  color: white;
  background-color: white;
  // padding: 20px;
  border-radius: 6px 6px;
`

const MovieImage = styled.Image`
  border-radius: 6px 6px 0 0;
`

const MovieTitle = styled.Text`
  font-size: 24px;
  color: darkgrey;
  margin: .5em 1em;
`
const MovieRelease = styled.Text`
  font-size: 18px;
  color: palevioletred;
  margin: .5em 1em;
`

const Label = styled.Text`
  font-size: 24px;
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
      <>
        <Button onPress={() => navigation.navigate('App')}>
          <Label>Movies component</Label>
        </Button>
        <Main>
          {movies.map((movie) => (
            <Button key={movie.id} to={`/movies/${movie.id}`}>
              <MovieDetails>
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieRelease>Released {movie.release_date}</MovieRelease>
              </MovieDetails>
            </Button> 
          ))} 
        </Main>
       </>
   );
  }


