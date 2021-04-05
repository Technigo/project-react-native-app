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
    
    <Container>
      {movies.map(movie => (
        <Movie key={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date}/>
      ))}
    </Container>
   
  )
}
export default MoviesList

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
 
  
  
`