import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container } from './Container'
import { ScrollView, Image, Dimensions } from 'react-native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo';



export const MoviesList = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
  });
  const [filmslist, setFilmslist] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=541a4fa38d118d1abb311bee0b16d595&language=en-US&page=1')
      .then(res => res.json())
      .then(json => setFilmslist(json.results))
  }, [])

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 16 / 9);
  const imageWidth = dimensions.width;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView>
        <Container>
          {filmslist.map(film =>
            <TouchableOpacity onPress={() => navigation.navigate('Movie Detail', { id: film.id })}>
              <Image
                key={film.id}
                resizeMode={'cover'}
                style={{ height: imageHeight, width: imageWidth }}
                source={{ uri: `https://image.tmdb.org/t/p/w780${film.poster_path}` }}
              />
            </TouchableOpacity>
          )}
        </Container>
      </ScrollView>
    );
  }

}