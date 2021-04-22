import React, {useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo';
import styled from 'styled-components/native'

const MainContainer = styled.View`
  flex: 1;
`

const BackgropImage = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

const PosterImage = styled.Image`
  flex: 1;
  height: 300px;
  position: absolute;
  bottom: 120px;
  width: 200px;
  margin: 10px;
  border: 3px solid white;
`

const TextContainer = styled.View`
  margin: 10px;
  height: 250px;
  padding: 10px;
  padding-bottom: 0;
  margin-bottom: 20px;
  position: absolute;
  top: 20px;
  background: rgba(0,0,0, 0.6); 
`

const MovieTitle = styled.Text`
  font-size: 18px;
  color: white;
  margin: 10px;
  margin-left: 0;
  font-weight: ${props => (props.bold ? '800' : '400')};
`

const MovieText = styled.Text`
  font-size: 12px;
  color: ${props => (props.rating ? 'red' : 'white')};
  margin-bottom: 10px;
  font-weight: ${props => (props.rating ? '800' : '400')};
`

const RatingContainer = styled.View`
  flex: 1;
  flex-direction: row;
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
            <MovieText rating>{details.vote_average} / 10</MovieText>
            <MovieText>{details.overview}</MovieText>
            <RatingContainer>
            {details.genres.map(genre => 
              <MovieText>{genre.name} · </MovieText>)}
            </RatingContainer>
          </TextContainer>
        </BackgropImage>
      ) }

    </MainContainer>
  )
}