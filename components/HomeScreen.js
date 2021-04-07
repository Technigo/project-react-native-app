import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import { API_URL } from '../reusable/urls'

const Container = styled.ScrollView`
  background-color: black;
  
`
const ImageContainer = styled.View`
  
`
const Poster = styled.ImageBackground`
  height: 830px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 30px;
`
const DetailListContainer = styled.View`
  width: 100%;
  align-items: center;
`

const Image = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  opacity: 0.9;
`

const ImageOverlay = styled.View`
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 200;
`

const Title = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`

const HomeScreen = ({navigation}) => {
  const [movieList, setMovieList] = useState([])

  useEffect (() => {
   fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovieList(data.results))
  }, [])


  return (
    <Container horizontal={false}>
     {movieList.map(movie =>
       <ImageContainer key={movie.id}> 
        <Poster source={{ uri:`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}}> 
          <DetailListContainer>
            <ImageOverlay>
            <Title 
              onPress={() => {
                navigation.navigate('Detail', {
                  itemID: `${movie.id}`                
                })
              }}
            >
              {movie.original_title}
            </Title>
            </ImageOverlay> 
            <Image source={{ uri:`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}}/>
          </DetailListContainer>  
        </Poster> 
      </ImageContainer>
    )}  

    </Container>
  )
}

export default HomeScreen 
