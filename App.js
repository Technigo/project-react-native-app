import React, { useEffect, useState } from "react"
import { StyleSheet, Text, Share } from "react-native"
import { Button } from 'react-native-elements';

import Images from "./components/Images.js"

import styled from "styled-components/native"

const FLICKR_API_URL = "https://api.flickr.com/services/rest/?method=" /* EXAMPLE: "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a46157fcdd866b116417760e3cd60b74&tags=star+citizen%2C+starcitizen&per_page=20&page=1&format=json&nojsoncallback=1"; */

const FLICKR_API_KEY = "a46157fcdd866b116417760e3cd60b74";
const tags = "northern sweden";

const App = () => {

  const [images, setImages] = useState([])
  const [selected, setSelected] = useState([])

  /* Function is called when pressing Share */
  const getOriginalSizeUrl = () => {    
    fetch(
      `${FLICKR_API_URL}flickr.photos.getSizes&api_key=${FLICKR_API_KEY}&photo_id=${selected}&format=json&nojsoncallback=1`,
      {
        method: "get",
      }
    )
      .then(response => response.json())
      .then(json => {
        const originalUrl = json.sizes.size[json.sizes.size.length - 1].source /* the last object in this array is the image in original quality */
        onShare(originalUrl) /* Call the Share function*/
    })
  }
  
  /* when the correct Url is fetched this function use the built-in Share function to send it  */
  const onShare = async (imageUrl) => {
    try {
      const result = await Share.share({
        url: imageUrl
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
      `${FLICKR_API_URL}flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=${tags}&per_page=20&page=${Math.round(100*Math.random())}&format=json&nojsoncallback=1`,
      {
        method: "get",
      }
    )
      .then(response => response.json())
      .then(json => {
        setImages(json.photos.photo.map(img => {
          return {
            thumbnailUrl: `https://live.staticflickr.com/65535/${img.id}_${img.secret}_q_d.jpg`,
            imageUrl: `https://live.staticflickr.com/65535/${img.id}_${img.secret}_o_d.jpg`,
            selected: false,
            key: img.id
          }
        }))
      })
  }, []);
  
  return (
    <Container>
      <Title>This a photo app!</Title>
      
      <Images 
        images={images}
        selected={selected}
        setSelected={setSelected}
        
      />
      <ShareButton 
        title="Share"
        type="outline"
        onPress={getOriginalSizeUrl}
        style={{flex: 1}}
      />
    </Container>
  )
}

const Container = styled.View`
  background-color: papayawhip;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const ShareButton = styled.Button`
  border-radius: 1px;
  border-color: black;
  background: #aaa;
`

export default App
