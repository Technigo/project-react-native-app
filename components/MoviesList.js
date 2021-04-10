import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import Movie from './Movie'
import movieicon from '../assets/movieicon.png'

const URL = "https://api.themoviedb.org/3/movie/popular?api_key=585503bd19f6199055d11458d97ac4cc&language=en-US&page=1"

const MoviesList = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch(URL)
     .then(res => res.json())
     .then(json => setMovies(json.results))
  },[])

  return (
   <>
    <Header>
      <Title>MovieHunter</Title>
      <MovieImage
        source={movieicon} />
    <Container>
    <PopularText >Popular</PopularText >
    {movies.map(movie => (
      <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} rating={movie.vote_average} overview={movie.overview}/>
      ))}
      </Container>
    </Header>
   </>
  )
}
export default MoviesList

const Header = styled.View`
  flex: 1;
  background-color: #16263a;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`
const Title = styled.Text`
  font-size: 28px;
  color: #3BDEEE;
  font-weight: bold;
  padding-bottom: 10px;
`
const MovieImage = styled.Image`
  width: 40px;
  height:40px;
  margin-bottom: 20px;
  `
const Container = styled.ScrollView`
  flex: 1;
  background-color: #121E2D;
  width: 100%;
  padding-left: 10px;
`
const PopularText = styled.Text`
font-size: 24px;
  color: #E0E0E0;
  padding-bottom: 10px;
`