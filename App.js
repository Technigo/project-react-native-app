import React, { useState, useEffect } from "react"
// import Header from "./components/Header"
// import Counter from "./components/Counter"
import styled from "styled-components/native"
import { ActivityIndicator } from "react-native"
import { Movie } from "./components/Movie"

const TOP_MOVIE_ID = 656516
const api_key = "363444609247127238629594b245e069"

const Container = styled.View`
flex:1;
background-color: black;
align-items: center;
justify-content: center;
`

const Button = styled.TouchableOpacity`
position: absolute;
bottom: 40;
background: pink;
padding: 10px 20px;
border-radius: 20px;
`
const ButtonText = styled.Text`
color: white;
font-size: 20;
`

const fetchRandomMovie = async () => {
  const movieId = Math.floor(Math.random() * TOP_MOVIE_ID) + 1
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
  const json = await res.json()

  if (json.status_code === 34 || !json.poster_path || json.adult) {
    return fetchRandomMovie()
  } else {
    return json
  }
}

export default function App() {
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

  //condition ? ifTrue : ifFalse 

  return (
    <Container>
      {loading
        ? <ActivityIndicator size="large" color="#fff" />
        : <Movie movie={movie} />
      }

      <Button onPress={fetchMovieData}>
        <ButtonText>Fetch new movie</ButtonText>
      </Button>
    </Container>
  )
}
