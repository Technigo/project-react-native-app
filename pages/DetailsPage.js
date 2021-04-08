
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'

import Share from './ShareButton'

//const URL = https://api.themoviedb.org/3/movie/399566?api_key=2365aea36d60ef1f206bd1bdf23fd999&language=en-US



const Container = styled.View`
flex: 1;
`



const Poster = styled.ImageBackground`
flex: 1;

`
const Bottom = styled.View`
flex:2;
background: rgba(0,0,0, 0.6); 
padding:10px
`
/*background: rgba(255,255,255, 0.6); ^*/
const MoviePicture = styled.Image`
width: 100%;
flex:3;
border: 5px solid #000;
`

const MovieTitle = styled.Text`
font-size: 20px;
font-weight: bold;
color: #fff
margin-bottom: 10px
`

const TextSpan = styled.Text`
color: red
font-weight: normal`

const MovieOverview = styled.Text`
font-size: 16px
font-weight: normal;
color: #fff

`


const MovieReleaseDate = styled.Text`
font-size: 16px
font-weight: bold;
color: #fff
margin: 10px 0px 10px 0px
`

const LoaderContainer = styled.View`
flex:1;
justify-content: center;
align-items: center;
background: black;
color: red`

const Loader = styled.ActivityIndicator`
color: red`




const Details = ({ route }) => {
  const {itemID} = route.params;
  const [details, setDetails] = useState([])
  const [load, setLoad ] = useState(true)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${itemID}?api_key=2365aea36d60ef1f206bd1bdf23fd999&language=en-US`)
    .then(res => res.json())
    .then(json => setDetails(json))
    
    setTimeout(() => { setLoad(false)},3000)
  
  }, [])

  console.log(details)

  // Läg till en True eller not true på data ifall det blir successfull, om inte datan laddar på 10 sekunder ska en sida som säger error komma upp

  const ShareURL = `https://api.themoviedb.org/3/movie/${itemID}?api_key=2365aea36d60ef1f206bd1bdf23fd999&language=en-US`

  
  console.log(ShareURL)

  return (
    <Container>

      { load? 
      <LoaderContainer>
        <Loader size="large" color="#fff" />
      </LoaderContainer>  :
      <Poster
        source={{ uri:`https://image.tmdb.org/t/p/w1280/${details.poster_path}`}}
      >
        <MoviePicture
          source={{ uri:`https://image.tmdb.org/t/p/w780/${details.backdrop_path}`}}
        ></MoviePicture>
        <Bottom>
          <MovieTitle>{details.original_title} <TextSpan>{details.vote_average}/10</TextSpan></MovieTitle>
          <MovieOverview>{details.overview}</MovieOverview>
          <MovieReleaseDate>Status: {details.status}</MovieReleaseDate>
          <Share MovieHomepage={details.homepage}/>
        </Bottom>
      </Poster>

      }



      
    </Container>
  )
}

export default Details