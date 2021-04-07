import React, { useEffect, useState } from 'react'
import { FlatList, Text, ScrollView } from 'react-native'
import styled from 'styled-components/native'

import Movie from './Movie'


const URL = "https://api.themoviedb.org/3/movie/popular?api_key=585503bd19f6199055d11458d97ac4cc&language=en-US&page=1"

const MoviesList = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch(URL)
     .then(res => res.json())
     .then(json => setMovies(json.results))
  },[])

  

  return (
   
    <Header>
      <Title>Movie Time</Title>
    <Title>🎬 </Title>
    <Container>
      {movies.map(movie => (
        <Movie  key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} rating={movie.vote_average} overview={movie.overview}/>
      ))}
      </Container>
    </Header>
   
  )
}
export default MoviesList

const Header = styled.View`
  flex: 1;
  background-color: #191817;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`

const Title = styled.Text`
  font-size: 24px;
  color: #FF7B02;
  padding-bottom: 10px;
`
const Container = styled.ScrollView`
  flex: 1;
  background-color: #191817;
`
