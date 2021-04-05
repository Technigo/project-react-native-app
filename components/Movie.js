import React from 'react'
import { FlatList, Text, View, Image,uri } from 'react-native'
import styled from 'styled-components/native'
import MoviesList from './MoviesList'

const Movie = ({ id, title, poster_path, release_date}) => {

  

return (
  <CardContainer> 
    <MovieImage
      source={{ uri: `https://image.tmdb.org/t/p/w1280${poster_path}`}} />  
    <TitleText>{title}</TitleText>
    <DateText>Released {release_date}</DateText>
</CardContainer>

)  
}

export default Movie 

const CardContainer = styled.View`
  display: flex;
  background-color: black;
  border: 2px solid black;
  min-height: 120px;
  margin: 5px;
  width:44%;
  
  
  `
  const MovieImage = styled.Image`
  width:100%;
  height:220px;
  `
  const TitleText = styled.Text`
  color: white;
  font-size: 18px;
  padding: 5px;
  `
  const DateText = styled.Text`
  color: white;
  padding: 5px;
  `