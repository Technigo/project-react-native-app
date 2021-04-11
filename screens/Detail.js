import React, {useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo';
import styled from 'styled-components/native'

const MainContainer = styled.View`
  flex: 1;
`

const BackgropImage = styled.ImageBackground`
  flex: 1;
`

const PosterImage = styled.Image`
  width: 50px;
  height: auto;
  flex: 3;
  position: absolute;
  border: 1px solid yellow;
`

const TextContainer = styled.View`
  flex: 1;
  border: 1px solid red;
  justify-content: flex-end;
`

const MovieTitle = styled.Text`
  font-size: 18px;
  color: white;
  margin: 10px;
  font-weight: ${props => (props.bold ? '800' : '400')};
`

const MovieText = styled.Text`
  font-size: 12px;
  color: white;
  border: 1px solid blue;
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
        <BackgropImage source={{uri: `http://image.tmdb.org/t/p/original/${details.backdrop_path}`}}>¨
          <PosterImage source={{uri: `http://image.tmdb.org/t/p/w342/${details.poster_path}`}}/>
          <TextContainer>
            <MovieTitle bold>{details.title}</MovieTitle>
            <MovieText>{details.overview}</MovieText>
          </TextContainer>
        </BackgropImage>
      ) }

    </MainContainer>
  )
}