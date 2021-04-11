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


export const TopRated = () => {
  const [topRated, setTopRated] = useState([])
  const TOP_LIST_API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US&page=1'


  useEffect(() => {
    fetch(TOP_LIST_API)
      .then(res => res.json())
      .then(json => setTopRated(json.results))
  },[])

  return (
    <Container>
      <ListContainer>
          {topRated.map(movie => (
            <MovieCard {...movie} navigation={navigation} />
            ))}
        </ListContainer>
      </Container>
  )
}