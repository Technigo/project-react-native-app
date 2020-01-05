import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { Movie } from './components/Movie'

const TOP_MOVIE_ID = 656516

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`

const Button = styled.TouchableOpacity`
  background: #80ff86;
  position: absolute;
  bottom: 40;
  padding: 10px 20px;
  border-radius: 20px;
`

const ButtonText = styled.Text`
  color: #1f2e1f;
  font-size: 18;
`

const fetchRandomMovie = async () => {
  const movieId = Math.floor(Math.random() * TOP_MOVIE_ID) + 1
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6420add5c0a9b0e0b9462a92916c3187&language=en-US`)
  const json = await res.json()

  if (json.status_code === 34 || !json.poster_path || json.adult) {
    return fetchRandomMovie()
  } else {
    return json
  }
}

const App = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(true)

  const fetchMovieData = () => {
    setLoading(true)
    fetchRandomMovie()
      .then((movieData) => {
        setMovie(movieData)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMovieData()
  }, [])

  return (
    <Container>
      {loading
        ? <ActivityIndicator size="large" color="#ffffff" />
        : <Movie movie={movie} />}

      <Button onPress={fetchMovieData}>
        <ButtonText>Fetch new movie</ButtonText>
      </Button>
    </Container>
  )
}

export default App
