import React, { useState, useEffect } from 'react'

import styled from 'styled-components/native' 
import Lottie from './Lottie';

const MovieDetail = ({ route }) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = route.params;

  const API_KEY = '175ffd5710eba9b52b1d7f46de42a152'
  const Detail_URL = `https://api.themoviedb.org/3/movie/${itemId}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
      fetch(Detail_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('404')
        }
      })
      .then(json => {
        setMovieDetail(json)
        setLoading(false)
      })
      .catch(() => {
        console.log('error')
      })
    }, [])
    //console.log(movieDetail)  
    
    return (
      <>
      {loading && <Lottie />}
      {!loading && (
        <Container>
        <Image source={{uri: `https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}}>
          <Wrapper>
            <Title>{movieDetail.original_title}</Title>
            <Paragraph>{movieDetail.tagline}</Paragraph>
            <Paragraph> ⭐️  {movieDetail.vote_average} / 10 </Paragraph>
            <Paragraph>{movieDetail.overview}</Paragraph>
          </Wrapper>
        </Image>
        </Container>  
      )}
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
const Wrapper = styled.View`
background-color: rgba(0,0,0,0.6);
height: 50vh;
justify-content: center;
padding: 20px;
`
const Title = styled.Text `
font-size: 28px;
font-weight: bold;
color: #fff;
margin-bottom: 10px;
`
const Paragraph = styled.Text `
color: #fff;
margin-bottom: 10px;
font-size: 16px;
`