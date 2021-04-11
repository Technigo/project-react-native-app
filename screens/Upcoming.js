import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'

import { MovieCard } from '../components/MovieCard'

const Container = styled.View`
  flex: 1;
  background-color: black;
`

const ListContainer = styled.ScrollView`
  flex: 1;
`


export const Upcoming = ({ navigation }) => {
  const [upcoming, setUpcoming] = useState([])
  const UPCOMING_LIST_API = 'https://api.themoviedb.org/3/movie/upcoming?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US&page=1'

  useEffect(() => {
    fetch(UPCOMING_LIST_API)
      .then(res => res.json())
      .then(json => setUpcoming(json.results))
  },[])

  return (
    <Container>
      <ListContainer>
          {upcoming.map(movie => (
            <MovieCard {...movie} navigation={navigation} />
            ))}
        </ListContainer>
      </Container>
  )
}