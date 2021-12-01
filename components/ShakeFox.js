import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, ImageBackground  } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native'

// styled components
const AnimalContainer = styled.View`
    border-radius: 10px;
    padding: 20px;
    margin: 0 10%;
    /* background-color: lightgrey; */
    justify-content: center;
    align-items: center;
`
const TextContainer = styled.View`
    background-color: orange;
    margin: 10px 0 10px 0;
    width: 280px;
    padding: 16px;
    border-radius: 10px;
    justify-content: center;
`
const TitleText = styled.Text`
    text-align: center;
    color: white;
`
const BottomText = styled.Text`
    text-align: center;
    color: white;
`

// API URL
const RandomFox = 'https://randomfox.ca/floof/' //.image

// Shake function
const ShakeFox = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [animal, setAnimal] = useState({})
  const [loading, setLoading] = useState(false)
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
      generateAnimal()
  },[])

  useEffect(() => {
      Accelerometer.setUpdateInterval(1000)
      subscribe()
      return () => unsubscribe()
  }, [])

  useEffect(() => {
      if (isShakingEnough(data)) {
          generateAnimal()
      }
  },[data])

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

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
  }

  // Fetch random animal
  const generateAnimal = () => {
      setLoading(true)
      fetch(RandomFox)
        .then((res) => res.json())
        .then((data) => setAnimal(data))
        .finally(() => setLoading(false))
  }

  return (
    <ImageBackground source={require('../assets/pixel-heart.png')} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'repeat'}}>
      <AnimalContainer>
            <TextContainer><TitleText>Random Foxes!</TitleText></TextContainer>
            {loading && <ActivityIndicator size="large" color="blue" />}
            <Image source = {{uri: animal.image}}
            style = {{ width: 280, height: 280, borderRadius: 10, margin: 10}}
            />
            <TextContainer><BottomText>Shake for a new fox</BottomText></TextContainer>
      </AnimalContainer>
      </ImageBackground>
    )
  }

  export default ShakeFox