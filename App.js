import React, { useEffect, useState } from "react";
import styled from "styled-components/native"
import Header from "./components/Header"
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Linking,
  Share
} from 'react-native';

const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+wildlife&per_page=15&page=1"

const App = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos)
        console.log(json)
      })
  }, [])

  const getImageToShare = photoId => {
    const photo = photos.find(p => p.id === photoId)
    return photo.src.original
  }

  const onShare = async photoId => {
    const result = await Share.share({
      message: 'Hi there, isnt this just awsome?',
      url: getImageToShare(photoId),
      title: 'Wildlife bliss'
    })

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        //shared with activity type of result.activityType
        alert('some wildlife inspo shared!')
      } else {
        //shared
      }
    } else if (result.action === Share.dismissedAction) {
      //dismissd
      alert('dismissed')
    }
  }

  const getSelectedImageUrl = (photoId) => {
    const photo = photos.find((p) => p.id === photoId)
    return Linking.openURL(photo.photographer_url)
  }

  return (
    <Container>
      <Header title='Welcome to explore the wildlife!' />
      <ScrollView>
        {photos.map((photo) => (
          <View key={photo.id}>

            <TouchableOpacity onPress={() => getSelectedImageUrl(photo.id)}>
              <Image
                source={{ uri: photo.src.original }}
                style={{ width: 400, height: 300, marginVertical: 10, }} />
            </TouchableOpacity>

            <Text
              style={{ color: 'peachpuff', textAlign: 'center', marginStart: 5 }}>Photo: {photo.photographer}
            </Text>

            <View>
              <Button onPress={() => onShare(photo.id)} title="Share">
                <Text
                  style={{ color: 'peachpuff', textAlign: 'center', fontWeight: 'bold' }}>
                  Share the wildlife
                </Text>
              </Button>
            </View>
          </View>
        ))
        }
      </ScrollView >
    </Container >
  )
}

export default App

const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 30;
  border: 2px solid peachpuff; 
  padding: 5px 10px; 
  border-radius: 50;
  text-align: center;
  text-align: center;
  left: 25%;¥  
`
const Container = styled.View`
  flex: 1;
  background-color: black;
  justifyContent: space-between;
  paddingHorizontal: 20;
  paddingVertical: 20;
`




