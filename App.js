import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import { GiphyChoice } from './components/GiphyChoice.js'
import { Image, View } from "react-native";
import { ShareButton } from './components/ShareButton'

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
  padding-top: 100px;
  `
export const ImageWrap = styled.View`
  width: 100%;
  height: ${({ height }) => (height ? height : "40%")};
  padding: 0 20px;
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
          }}
          source={{
            uri: giphy.image_url,
          }}
        />
      </ImageWrap>
      {/* <ShareButton imageUrl={imageUrl} /> */}
    </Container>
  );
}








