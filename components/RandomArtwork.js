import React, { useState, useEffect } from 'react';
import { View, Button, Share } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from "expo-sensors";

import { REMBRANDT_URL } from '../utils/urls';

const ArtworkContainer = styled.ScrollView`
	background-color: papayawhip;
  padding: 100px 35px;
`

const TitleText = styled.Text`
  font-size: 16px;
  font-style: italic;
  text-align: left;
  margin: 0  5px 5px 5px;
`

const ArtworkImage = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`

const LocationText = styled.Text`
  font-size: 16px;
  text-align: left;
  margin: 0  5px 20px 5px;
`

const ShakeText = styled.Text`
font-size: 16px;
font-style: italic;
text-align: center;
`

const RandomArtwork = () => {
  const [randomArtwork, setRandomArtwork] = useState([])
  const [subscription, setSubscription] = useState(null);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const generateRandomArtwork = () => {
    fetch(REMBRANDT_URL)
    .then(res => res.json())
    .then(data => setRandomArtwork(data.artObjects[Math.floor(Math.random()*20)]))
  }

  useEffect(() => {
    generateRandomArtwork();
  }, []);

  const url = randomArtwork?.webImage?.url;
  const title = "Rembrandt Artwork";
  const message = "Look at this beautiful artwork";

  const options = {
  title,
  url,
  message,
  };

  const onShare = async (customOptions = options) => {
    try {
      await Share.share(customOptions);
    } catch (err) {
      console.log(err)
    }
  };

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
        generateRandomArtwork();
    }
  }, [data])

  return (
    <ArtworkContainer>
      <View>
        <ArtworkImage source={randomArtwork?.webImage}/>
        <TitleText>{randomArtwork?.longTitle}</TitleText>
        <LocationText>{randomArtwork?.productionPlaces}</LocationText>
        <Button title="share" onPress={async () => { await onShare()}}/>
        <ShakeText>or shake me for next!</ShakeText>
      </View>
    </ArtworkContainer>
  )
};

export default RandomArtwork;