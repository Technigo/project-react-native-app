import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=109d46d58de8af95e0256f956b0a6d8c&language=en-US&page=1'

const Container = styled.ScrollView`
  background-color: black;
  flex: 1;
`
const ImageContainer = styled.View`
  width: 400px; 
  height: 100%;
`
const Poster = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 30px;
`
const DetailListContainer = styled.View`
  width: 100%;
  align-items: center;
  color: white;
`

const Image = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 12px;
  opacity: 0.9;
`

const ImageOverlay = styled.View`
  position: absolute;
  top: 80%;
  z-index: 1;
  width: 250;
`

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`

const App = () => {
  const [movieList, setMovieList] = useState([])

  useEffect (() => {
   fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovieList(data.results))
  }, [])


  return (
    <Container horizontal={true}>
     {movieList.map(movie =>
      <ImageContainer key={movie.id}>
        <Poster source={{ uri:`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}}> 

          <DetailListContainer>
            <ImageOverlay>
              <Title>{movie.original_title}</Title>
            </ImageOverlay> 
            <Image source={{ uri:`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}}/>
          </DetailListContainer>


        </Poster> 
      </ImageContainer>
    )}  
    </Container>
  )
}

export default App
