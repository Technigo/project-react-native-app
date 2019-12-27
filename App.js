import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import {
  ScrollView,
  Share,
  View,
  Text,
  Linking,
  TouchableOpacity
} from 'react-native';
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
const url = `https://api.pexels.com/v1/curated?per_page=15&page=1`;

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

  const getImageToShare = photoId => {
    const photo = photos.find(p => p.id === photoId);
    return photo.src.original;
  };

  const onShare = async photoId => {
    const result = await Share.share({
      message: 'Hey! Look at this beautiful photo from Pexels',
      url: getImageToShare(photoId),
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

  const getPhotographer = photographerId => {
    const photographId = photos.find(p => p.id === photographerId);
    return Linking.openURL(photographId.photographer_url);
  };

  handlePressImage = imageId => {
    const image = photos.find(p => p.id === imageId);
    return Linking.openURL(image.src.original);
  };

  return (
    <Container>
      <Header />
      <ScrollView>
        {photos.map(photo => (
          <View key={photo.id}>
            <TouchableOpacity onPress={() => handlePressImage(photo.id)}>
              <Image source={{ uri: photo.src.original }} />
            </TouchableOpacity>

            <PhotoText onPress={() => getPhotographer(photo.id)}>
              Photographer: {photo.photographer}
            </PhotoText>

            <View>
              <Button onPress={() => onShare(photo.id)} title="Share">
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
