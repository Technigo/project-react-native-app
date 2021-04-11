import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import { Text, View, ScrollView } from 'react-native'

import { MovieCard } from '../components/MovieCard'

const Container = styled.View`
  flex: 1;
  background-color: black;
`

const ListContainer = styled.ScrollView`
  flex: 1;
`


export const Popular = ({navigation}) => {
  const [popular, setPopular] = useState([])
  const POPULAR_LIST_API = 'https://api.themoviedb.org/3/movie/popular?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US&page=1'

  useEffect(() => {
    fetch(POPULAR_LIST_API)
      .then(res => res.json())
      .then(json => setPopular(json.results))
  },[])

  return (
    <Container>
      <ListContainer>
          {popular.map(movie => (
            <MovieCard {...movie} navigation={navigation} />
            ))}
        </ListContainer>
      </Container>
  )
}
