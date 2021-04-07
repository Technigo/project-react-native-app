import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import MovieCard from './MovieCard'

const Container = styled.View`
justify-content: space-evenly;
background-color: black;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const MovieList = () => {
  
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e90c1322becf61268c0c0fea570c7099&language=en-US&page=1')
    .then(res => res.json())
    .then(json => {
      setMovies(json.results)})
    .catch(err => console.error(err))
  }, [])

  return (
    <Container>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id}/>
      ))}
    </Container>
  )
}

export default MovieList