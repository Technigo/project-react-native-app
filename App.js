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
      title: 'Caribbean bliss'
    })

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        //shared with activity type of result.activityType
        alert('some vacay inspo just shared!')
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
      <Header title='Welcome to explore wildlife!' />
      <ScrollView>
        {photos.map((photo) => (
          <View key={photo.id}>

            <TouchableOpacity onPress={() => getSelectedImageUrl(photo.id)}>
              <Image
                source={{ uri: photo.src.original }}
                style={{ width: 400, height: 300, marginVertical: 10, }} />
            </TouchableOpacity>

            <Text
              style={{ color: 'peachpuff', textAlign: 'left', marginStart: 5 }}>Photo: {photo.photographer}</Text>

            <View>
              <Button onPress={() => onShare(photo.id)} title="Share">
                <Text
                  style={{ color: 'peachpuff', textAlign: 'center', fontWeight: 'bold' }}>
                  Share image!
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

// const Button = styled.TouchableOpacity`
//   width: 400;
//   height: 300;
//   background-color: black;
//   margin-bottom: 20;
//   border-radius: 5;

const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 34;
  background-color: black;
  padding: 5px 5px;  
`
// text-align: left;

//  const Container = styled.View`
//   flex: 1;
//   paddingHorizontal: 20;
//   paddingVertical: 20;
//   flexWrap: wrap;
//   background-color: black;
//   justifyContent: space-between;
//   alignContent: center;
// `
const Container = styled.View`
  flex: 1;
  background-color: black;
  justifyContent: space-between;
  paddingHorizontal: 20;
  paddingVertical: 20;
`




