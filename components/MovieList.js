import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

import MovieCard from './MovieCard'

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  }
});

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
    <View style={styles.container}>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id}/>
      ))}
    </View>
  )
}

export default MovieList