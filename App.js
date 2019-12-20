import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { ScrollView, Share, View, Text } from 'react-native';
import { Header } from './components/Header';

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 300px;
  height: 300px;
  margin-top: 20px;
`;

const Button = styled.TouchableOpacity`
  background: #80ff86;
  position: absolute;
  bottom: 40;
  padding: 10px 20px;
  border-radius: 20px;
  color: black;
  margin-left: 20px;
`;

const PhotoText = styled(Text)`
  color: white;
`;

const apiKey = `563492ad6f917000010000017bc0c5e618504697b6e8169eb6815175`;
const url = 'https://api.pexels.com/v1/curated?per_page=15&page=1';

export const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos);
        console.log(json);
      });
  }, []);

  onShare = async () => {
    const result = await Share.share({
      message: 'Hey! Look at this beautiful photo from Pexels',
      url: photos[0].src.original,
      title: 'Wow, did you see that?'
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        alert('You shared an image');
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
      alert('dismissed');
    }
  };

  return (
    <Container>
      <Header />
      <ScrollView>
        {photos.map(photo => (
          <View key={photo.id}>
            <Image source={{ uri: photo.src.original }} />
            <PhotoText>Photographer: {photo.photographer}</PhotoText>
            <View>
              <Button onPress={onShare} title="Share">
                <Text>Share</Text>
              </Button>
            </View>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default App;
/*
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';

import { ActivityIndicator, Container } from 'react-native';
import Movie from './components/Movie';

const Button = styled.TouchableOpacity`
  position: absolute;
`;
const ButtonText = styled.Text`
  color: green;
`;

export const App = () => {
  const [movies, setMovies] = useState([]);

  const api_key = 'dcb0caab506cac37c3f7dc479ca8aee2';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setMovies(json.results);
      }, []);

    return (
      <Container>
        {movies.map(movie => (
          <Text>{movie.title}</Text>
        ))}
      </Container>
    );
  });
};

export default App;

/*
<View>
        {images.map(image => (
          <View key={photo.id}>{image}</View>
        ))}
      </View>
      */
