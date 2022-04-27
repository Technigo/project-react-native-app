import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

import { REMBRANDT_URL } from '../utils/urls';

const ArtworkListContainer = styled.ScrollView`
	background-color: papayawhip;
  margin: 50px;
`

const ArtworkImage = styled.Image`
  width: 100px;
  height: 100px;
`

const Artworks = () => {

  const [artworks, setArtworks] = useState([])

  const generateArtworks = () => {
    fetch(REMBRANDT_URL)
    .then(res => res.json())
    .then(data => setArtworks(data.artObjects[Math.floor(Math.random()*10)]))
  }

  useEffect(() => {
    generateArtworks();
  }, []);

  console.log(artworks)
  // const randomArtwork = artworks[Math.floor(Math.random()*artworks.length)];
  // console.log(randomArtwork)

  return (
    <ArtworkListContainer>
      <View>
        <Text>{artworks.longTitle}</Text>
        <ArtworkImage source={artworks.webImage}/>
      </View>
    </ArtworkListContainer>
  )

  // return (
  //   <ArtworkListContainer>
  //   {artworks.map((artwork) => {
  //     return (
  //       <View key={artwork.id}>
  //         <Text>{artwork.title}</Text>
  //         <ArtworkImage source={artwork.webImage}/>
  //       </View>
  //     )
  //   })}
  //   </ArtworkListContainer>
  // )
};

export default Artworks;