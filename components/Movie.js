import React from 'react'
import { TouchableOpacity, Alert, Text } from 'react-native'
import styled from 'styled-components/native'

import
 MovieDetails from './MovieDetails'

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
          <UpperTextContainer>
            <TitleText>{title}</TitleText>
            <RatingText>Rating: {rating}</RatingText>
          </UpperTextContainer>
        <LowerTextContainer>
        <MovieDetails id={id}/> 
        </LowerTextContainer>
        </Textsection>
    </CardContainer>
  </TouchableOpacity>
  </>
)  
}

export default Movie 

const CardContainer = styled.View`
  display: 1;
  display: flex;
  background-color: #121E2D;
  margin-bottom: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  `
  const MovieImage = styled.Image`
  width:100px;
  height:150px;
  border-radius: 5px;
  `
  const Textsection = styled.View`
  display:flex;
  flex-direction:column;
  `
  const UpperTextContainer = styled.View`
  max-width: 300px;
  height: 90px;
  `  
  const TitleText = styled.Text`
  display: flex;
  color: #E0E0E0;
  font-size: 18px;
  padding: 5px 10px;
  font-weight:bold;
  flex-direction: row;
  flex-wrap: wrap;
  `
  const RatingText = styled.Text`
  color: #3BDEEE;
  padding-left: 10px;
  `
  const LowerTextContainer = styled.View`
  `
  

 
  