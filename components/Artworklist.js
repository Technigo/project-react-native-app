import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { REMBRANDT_URL } from '../utils/urls';

const ArtworkImage = styled.Image`
  width: 50px;
  height: 50px;
`

const ArtworkList = () => {

  const [artworks, setArtworks] = useState([])

  const generateArtworks = () => {
    fetch(REMBRANDT_URL)
    .then(res => res.json())
    .then(data => setArtworks(data.artObjects))
  }

  useEffect(() => {
    generateArtworks();
  }, []);
  
  return (
    <View>
    {artworks.map((artwork) => {
      return (
        <View key={artwork.id}>
          <Text>{artwork.title}</Text>
          <ArtworkImage source={artwork.webImage}/>
        </View>
      )
    })}
    </View>
  )
};

export default ArtworkList;