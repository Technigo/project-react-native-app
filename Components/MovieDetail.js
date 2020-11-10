import React, { useState, useEffect } from 'react'

import { View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components/native' 



const MovieDetail = ({ route }) => {
  const [movieDetail, setMovieDetail] = useState({});

  const { itemId } = route.params;
  //const { movie } = route.params;
  //console.log(movie)

  const API_KEY = '175ffd5710eba9b52b1d7f46de42a152'
  const Detail_URL = `https://api.themoviedb.org/3/movie/${itemId}?api_key=${API_KEY}&language=en-US`

  useEffect(() => {
    fetch(Detail_URL)
      .then(res => res.json())
      .then(json => setMovieDetail(json))
    }, [])
  
    console.log(movieDetail)

    const image = { uri: `https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}` };
    
    return (
      <>
      <Container>
        <Image source={image}>
        <Paragraph>{movieDetail.original_title}</Paragraph>
        <Paragraph>{movieDetail.vote_average} / 10 </Paragraph>
        </Image>
      </Container>
    
    </>
    )
}
export default MovieDetail

const Container = styled.View `
flex: 1;
justify-content: center;
align-items: center;
`
const Image = styled.ImageBackground `
flex: 1;
object-fit: cover;
width: 100%;
justify-content: center;
`
const Paragraph = styled.Text `
color: #f9c2ff;
`