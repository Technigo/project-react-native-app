import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import MovieElement from '../components/MovieElement'

import { MOVIE_LIST_URL } from '../reusables/API_URL'

const MovieList = () => {
  const [ movieList, setMovieList ] = useState([])
 
  const fetchMovieList = () => {
    fetch(MOVIE_LIST_URL) 
        .then((res) => res.json())
        .then((json) => setMovieList(json.results))
        .catch((err) => console.error(err))
  }
      
  useEffect(() => {     
    fetchMovieList()   
  }, [])
  
  return (
    <Container>
      {movieList.map(movie => (
        <MovieElement key={movie.id} {...movie} />
      ))}
    </Container>
  )
}

const Container = styled.ScrollView`
  background-color: hsl(294, 3%, 15%);
`

export default MovieList
