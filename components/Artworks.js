import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from "expo-sensors";

import { REMBRANDT_URL } from '../utils/urls';

const ArtworkContainer = styled.ScrollView`
	background-color: papayawhip;
  margin: 50px;
`

const ArtworkImage = styled.Image`
  width: 300px;
  height: 300px;
`

const Artworks = () => {

  const [artworks, setArtworks] = useState([])
  const [subscription, setSubscription] = useState(null);
  //const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const generateArtworks = () => {
    fetch(REMBRANDT_URL)
    .then(res => res.json())
    .then(data => setArtworks(data.artObjects[Math.floor(Math.random()*10)]))
  }

  useEffect(() => {
    generateArtworks();
  }, []);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
  subscribe();
  return () => unsubscribe();
  }, []);

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  }

  useEffect(()=> {
    if (isShaking(data)) {
        generateArtworks();
    }
  }, [data])

  console.log(artworks)


  return (
    <ArtworkContainer>
      <View>
        <Text>{artworks.longTitle}</Text>
        <ArtworkImage source={artworks.webImage}/>
        <Button title="read more" />
        <Button title="share" />
      </View>
    </ArtworkContainer>
  )

  // return (
  //   <ArtworkContainer>
  //   {artworks.map((artwork) => {
  //     return (
  //       <View key={artwork.id}>
  //         <Text>{artwork.title}</Text>
  //         <ArtworkImage source={artwork.webImage}/>
  //       </View>
  //     )
  //   })}
  //   </ArtworkContainer>
  // )
};

export default Artworks;