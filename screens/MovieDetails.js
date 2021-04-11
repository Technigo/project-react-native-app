import React, {useState, useEffect} from 'react'
import { Dimensions } from 'react-native'
import { MOVIE_BACKDROP } from '../reusables/API_URL'
import styled from 'styled-components/native'
import moment from 'moment'

const MovieDetails = ({ route }) => {
  const [ details, setDetails ] = useState({})
  const { id } = route.params
  
  useEffect(() => {  
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=84c715899a256d0ed1ae1ac98d6fb9a6&language=en-US`)
    .then(res => res.json())
    .then(json => setDetails(json))
    .catch(err => console.error(err))
  }, [id])

  return (
    <Container>
      <Backdrop className="background-image" source={{ uri: MOVIE_BACKDROP(details.backdrop_path) }} />
      <TextContainer>
        <Title>{details.title}</Title>
        <Tagline>{details.tagline}</Tagline>
        <Release>Released {moment(details.release_date).fromNow()}</Release>
        <Rating>{details.vote_average}/10</Rating>
        <Overview>{details.overview}</Overview>
      </TextContainer>
      
    </Container>
  )
}


const Container = styled.ScrollView`
  background: hsl(294, 3%, 15%);
  color: white;
`
const Backdrop = styled.Image`
  color: white;
  width: ${Dimensions.get('window').width};
  height: 400px;
  margin: 0 auto;
  
`

const TextContainer = styled.View`
  padding: 12px;
`

const Title = styled.Text`
  font-family: 'Inter 400';
  color: white;
  font-weight: 900;
  font-size: 36px;
`

const Tagline = styled.Text`
  margin: 4px 0;
  color: white;
  font-weight: 500;
  font-style: italic;
  font-size: 24px;
`

const Release = styled.Text`
  font-size: 14px;
  color: grey;
`

const Rating = styled.Text`
  color: white;
  font-size: 16px;
`

const Overview = styled.Text`
  color: white;
  font-size: 16px;
`
export default MovieDetails
