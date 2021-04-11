import React from 'react'
import styled from 'styled-components/native'

const ImageContainer = styled.View`
  background: rgba(0, 0, 0, 0.75);
`

const PosterImage = styled.ImageBackground`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.View`
  flex:1;
  position: absolute;
  width: 100%;
  height: 100%;
`

const MovieTitle = styled.Text`
  font-size: 18px;
  position: absolute;
  color: white;
  margin: 10px;
  flex: 1;
  font-weight: ${props => (props.bold ? '800' : '400')};
`



export const MovieCard = ({title, poster_path, id, navigation}) => {

  return (
    <ImageContainer>
    <PosterImage 
      source={{uri: `http://image.tmdb.org/t/p/w342/${poster_path}`}}
      />
    <TextContainer>
      <MovieTitle 
      bold
      onPress={() => navigation.navigate("Detail", {
        movieId: `${id}`
        })}
      >{title}</MovieTitle>
    </TextContainer>
  </ImageContainer>
  )
}