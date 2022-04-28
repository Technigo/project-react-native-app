import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { REMBRANDT_URL } from '../utils/urls';

const ArtworkContainer = styled.ScrollView`
	background-color: papayawhip;
  margin: 50px;
`

const ArtworkImage = styled.Image`
  width: 300px;
  height: 300px;
`

const Artworkslist = () => {
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
    <ArtworkContainer>
    <Text>REMBRANDT RANDOMIZER</Text>
    {artworks.map((artwork) => {
      return (
        <View key={artwork?.id}>
          <Text>{artwork?.title}</Text>
          <ArtworkImage source={artwork?.headerImage}/>
        </View>
      )
    })}
    </ArtworkContainer>
  )
}

export default Artworkslist;