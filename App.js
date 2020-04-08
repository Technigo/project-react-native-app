import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import { GiphyChoice } from './components/GiphyChoice.js'
import { Image, Share } from "react-native";

// const api_key = "lByN5BPEwk9MR74phtPh0JpBBBBWyuVH";

export const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  text-align: center;
`

export const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  padding-top: 50px;
  `
const ImageWrap = styled.View`
  width: 100%;
  height: ${({ height }) => (height ? height : "40%")};
  padding: 0 20px;
  align-items: center;
  margin-top: 10px;
`
const TouchableOpacity = styled.TouchableOpacity`
  border-radius: 3px;
  color: #d1b3db;
  border: 3px solid palevioletred;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px; 
  margin-bottom: 15px;
  width: 50%;
  align-self: center;
`

export default function App() {
  const [selectedValue, setSelectedValue] = useState();
  const [giphy, setGiphy] = useState('');

  const animalURL = `https://api.giphy.com/v1/gifs/random?api_key=lByN5BPEwk9MR74phtPh0JpBBBBWyuVH&tag=${selectedValue}&rating=G`;

  useEffect(() => {
    fetch(animalURL)
      .then(res => res.json())
      .then(json => {
        setGiphy(json.data);
      });
  }, [animalURL]);


  const onShare = async () => {
    try {
      const result = await Share.share({
        subject: 'A gif for you!',
        title: 'Giphy gif',
        message:
          'Sending you a funny gif from Giphy.gif. Check it out:',
        url: `${giphy.image_original_url}`
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

  return (
    <Container>
      <Title> Make someone happy</ Title>
      <Title>by sharing a Giphy!</Title>
      <GiphyChoice selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      <ImageWrap>
        <Image
          style={{
            width: 250,
            height: 250,
            borderRadius: 5,
          }}
          source={{
            uri: giphy.image_url,
          }}
        />
      </ImageWrap>

      <TouchableOpacity onPress={onShare} title="Share">
        <Title>SHARE</Title>
      </TouchableOpacity>
      {/* <Footer /> */}
    </Container>
  );
}







