import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'
// Denna är senaste kl 10:14 2021-04-09
import DetailsPage from './DetailsPage'

import { Dimensions } from 'react-native';


const API_Key = '2e6a7b75ad4d088fae1f52620044bef7'
const URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2365aea36d60ef1f206bd1bdf23fd999'

const Container = styled.View`
flex:1`

const Content = styled.ScrollView`
flex: 1;

`

const ImageContainer = styled.View`
flex:1;


`
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


const Top = styled.ImageBackground`
width: ${props => windowWidth};
height: ${props => windowHeight};
justify-content: center;
align-items: center;
;

` //  width: 100vw funkar inte i appen när man öppnar med tel
// Tar du bort filter blurr och nästa så blir det normalt igen
// filter: blur(8px) funkar ej på antive

const TopText = styled.ImageBackground`
  height: 250px;
  width: 250px;

  border: 5px solid #fff

  
  
  ` // vad kostigt det blir med border
  // position: absolute;
  //left: 17%;
  //bottom: 35%;

const MovieTitle = styled.Text`

position:absolute;
font-size: 24px;
color: white;
font-weight: bold;
flex:1;
bottom: 0%;
`

const LoaderContainer = styled.View`
flex:1;
justify-content: center;
align-items: center;
background: black;
color: red`

const Loader = styled.ActivityIndicator`
color: red`

const TextImageContent = styled.View`
flex:1;
position: absolute;
width: 100%;
height: 100%
`

const Align = styled.View`
flex:1;
justify-content: center;
align-items:center

`





const Popular = ({navigation}) => {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState([]) // Ta bort
  const [load, setLoad ] = useState(true)

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((json) => {
      setMovies(json.results)
      setTitle(json.results[0])

    }
    )

    setTimeout(() => { setLoad(false)},3000)
  }, [movies])

  console.log(movies[0])
  console.log(title.poster_path)
  //console.log(title.original_title)

  //const (`https://image.tmdb.org/t/p/w300/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg`)
  

  // På <Content horizontal={true}>, tar du bort horizontal={true} så får du en normal upp och ner scroll så som Maria hade ifall du sätter height till 800 px

  return (
        <Container >

{load ? <LoaderContainer>
        <Loader size="large" color="#fff" />
      </LoaderContainer>
      : <Content horizontal={true}> 
        {movies.map((movie) => (
            <ImageContainer>
              <Top
              blurRadius={5}
          source={{ uri:`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}}>

            
          </Top>
          <TextImageContent>
          <Align>
          <TopText
            source={{ uri:`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}}>
              <MovieTitle
              onPress={() => navigation.navigate("Details", {
                itemID: `${movie.id}`
              })}
              >{movie.title}
              </MovieTitle> 
            
            </TopText>
          </Align>
          </TextImageContent>
            </ImageContainer>
          ))}
      </Content>



}



        </Container>
  )
}

export default Popular


