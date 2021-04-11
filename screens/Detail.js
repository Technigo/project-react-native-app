import React, {useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native'
import { MovieCard } from '../components/MovieCard';

const MainContainer = styled.View`
  flex: 1;
`

const BackgropImage = styled.ImageBackground`
  flex: 1;
`

const PosterImage = styled.Image`
  width: 50px;
  flex: 3;
  position: absolute;
`


const TextContainer = styled.View`
  flex: 2;
  background: rgba(0,0,0, 0.6); 
`

const MovieTitle = styled.Text`
  font-size: 18px;
  color: white;
  margin: 10px;
  flex: 1;
  font-weight: ${props => (props.bold ? '800' : '400')};
`

const MovieText = styled.Text`
  font-size: 12px;
  color: white;
  flex: 1;
`



export const Detail = () => {
  const [details, setDetails] = useState([])
  const id = useRoute()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id.params.movieId}?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US`)
      .then(res => res.json())
      .then(json => setDetails(json))
  },[])

  return (
    <MainContainer>
      { details.length !== 0 && (
        <BackgropImage source={{uri: `http://image.tmdb.org/t/p/original/${details.backdrop_path}`}}>
          <PosterImage source={{uri: `http://image.tmdb.org/t/p/w342/${details.poster_path}`}}/>
          <TextContainer>
            <MovieTitle bold>{details.title}</MovieTitle>
            <MovieText>{details.description}</MovieText>
          </TextContainer>
        </BackgropImage>
      ) }

    </MainContainer>
  )
}