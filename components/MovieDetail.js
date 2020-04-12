import React, { useState, useEffect } from 'react'
import { Container } from './Container'
import { Title } from './Text'
import { ScrollView, ImageBackground, Dimensions } from 'react-native'
import { RatingText } from './RatingText'
import { DetailTitle } from './DetailTitle'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo';




export const MovieDetail = ({ route }) => {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
  });
  const { id } = route.params
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=541a4fa38d118d1abb311bee0b16d595&language=en-US`
  const [movie, setMovie] = useState([])

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 16 / 9);
  const imageWidth = dimensions.width;

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(response => {
        console.log(`Status code: ${response.status}`)
        return response.json()
      })
      .then(json => setMovie(json))
  }, [MOVIES_URL, id])

  if (!movie) {
    return <></>
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView>
        <Container>
          <ImageBackground
            resizeMode={'cover'}
            style={{ height: imageHeight, width: imageWidth, backgroundColor: 'white' }}
            imageStyle={{ opacity: 0.4 }}
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          >
            <DetailTitle key={movie.title}>{movie.title}</DetailTitle>
            <RatingText>{movie.vote_average}/10</RatingText>
            <Title>{movie.overview}</Title>
          </ImageBackground>
        </Container>
      </ScrollView>
    );
  }

}