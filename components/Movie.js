import React from 'react'

import { TouchableOpacity, Alert } from 'react-native'
import styled from 'styled-components/native'
import { MovieDetails } from './MovieDetails'



const Movie = ({ id, title, poster_path, rating, overview}) => {
  
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
        <Textsection>
        <TitleText>{title}</TitleText>
        <MovieDetails id={id}/> 
        </Textsection>
    </CardContainer>
  </TouchableOpacity>
  </>
)  
}

export default Movie 

// const DetailsAlert = styled.Alert`
// background-color: pink;`


const CardContainer = styled.View`
  display: 1;
  display: flex;
  background-color: #3D3834;
  margin-bottom: 5px;
  flex-direction: row;
  flex-wrap: wrap;
  
  `
  const MovieImage = styled.Image`
  width:100px;
  height:150px;
  `
  const Textsection = styled.View`
  display:flex;
  flex-direction:column;
  `
  const TitleText = styled.Text`
  display: flex;
  color: #E0E0E0;
  font-size: 18px;
  padding: 5px 10px;
  max-width: 200px;
  height: 75px;
  flex-direction: row;
  flex-wrap: wrap;
  
  `

 
  