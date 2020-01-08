import React, { useEffect, useState } from "react"
import { StyleSheet, Text, Share } from "react-native"
import { Button } from 'react-native-elements';

import Images from "./components/Images.js"

import styled from "styled-components/native"

const FLICKR_API_URL = "https://api.flickr.com/services/rest/?method=" /* EXAMPLE: "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a46157fcdd866b116417760e3cd60b74&tags=star+citizen%2C+starcitizen&per_page=20&page=1&format=json&nojsoncallback=1"; */

const FLICKR_API_KEY = "a46157fcdd866b116417760e3cd60b74";
const tags = "star citizen, starcitizen";

const App = () => {

  const [images, setImages] = useState([])
  const [thumbnails, setThumbnails] = useState([])

  const [selected, setSelected] = useState([])

  /* Function is called when pressing Share */
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A lolwork for building native apps using React', /* TODO Replace with selected image */
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => { /* Fetch list of 20 images */ 
    fetch(
      `${FLICKR_API_URL}flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=${tags}&per_page=20&page=1&format=json&nojsoncallback=1`,
      {
        method: "get",
      }
    )
      .then(response => response.json())
      .then(json => {
        setImages(json.photos.photo);
        setThumbnails(json.photos.photo.map(img => {
          console.log(`https://live.staticflickr.com/65535/${img.id}_${img.secret}_q_d.jpg`)
          return `https://live.staticflickr.com/65535/${img.id}_${img.secret}_q_d.jpg`
        }))
      })
  }, []);

  
  
  
  return (
    <Container>
      <Title>This a photo app!</Title>
      <Images 
        thumbnails={thumbnails}
        selected={selected}
        setSelected={setSelected}
      />
      <Button 
        title="Share"
        type="outline"
        onPress={onShare}
      />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

// const ShareButton = styled.Button`
//   background-color: #aaa;
//   color: #fff;
//   border-radius: 1px;
// `
export default App
