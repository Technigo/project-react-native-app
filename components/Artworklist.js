import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { REMBRANDT_URL } from '../utils/urls';

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
          <Image style={styles.image} source={artwork.webImage}/>
        </View>
      )
    })}
    </View>
  )
};

const styles = StyleSheet.create({
	image: {
    width: 50,
    height: 50,
	}
})


export default ArtworkList;