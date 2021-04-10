import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'

import { Dimensions } from 'react-native';

const URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=2365aea36d60ef1f206bd1bdf23fd999'

const Container = styled.View`
flex:1;
`

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
`

const TopText = styled.ImageBackground`
height: 250px;
width: 250px;
border: 5px solid #fff
` 

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
color: red
`

const Loader = styled.ActivityIndicator`
color: red;
`

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

const Upcoming = ({navigation}) => {
  const [movies, setMovies] = useState([])
  const [load, setLoad ] = useState(true)

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((json) => setMovies(json.results))

    setTimeout(() => { setLoad(false)},3000)
  }, [movies])

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
              ))
            }
          </Content>
          }
        </Container>
  )
}

export default Upcoming


