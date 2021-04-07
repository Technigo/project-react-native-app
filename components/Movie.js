import React from 'react'

import { TouchableOpacity, Alert } from 'react-native'
import styled from 'styled-components/native'
import { MovieDetails } from './MovieDetails'



const Movie = ({ id, title, poster_path, release_date, rating, overview}) => {
  
  const onPress = () => {
    Alert.alert(
      `${title}`,
      `Rating: ${rating} - ${overview}`,
      [
        { text: "Back to movies", onPress: () => console.log("Cancel Pressed")}
      ]
    );
  }

return (
  <>
  <TouchableOpacity onPress={onPress}>
    <CardContainer>
      <MovieImage
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}`}} />  
      <TextContainer>
        <TitleText>{title}</TitleText>
        <DateText>Released: {release_date}</DateText>
        <MovieDetails id={id}/>
      </TextContainer>
    </CardContainer>
  </TouchableOpacity>
  </>
)  
}

export default Movie 

// const DetailsAlert = styled.Alert`
// background-color: pink;`


const CardContainer = styled.View`
  display: flex;
  background-color: #3D3834;
  min-height: 120px;
  margin-bottom: 5px;
  flex-direction: row;
  flex-wrap: wrap;
  
  `
  const MovieImage = styled.Image`
  width:100px;
  height:150px;
  `
  const TextContainer = styled.Text`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 200px;
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