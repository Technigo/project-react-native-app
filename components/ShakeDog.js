import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image  } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native'

const AnimalContainer = styled.View`
    border-radius: 10px;
    padding: 20px;
    margin: 20px 10%;
    background-color: lightgrey;
    justify-content: center;
    align-items: center;
`
const TitleText = styled.Text`
    margin: 10px 0 20px 0;
    color: grey;
`

const RandomDog = 'https://random.dog/woof.json' //.url

const ShakeDog = () => {
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

  const generateAnimal = () => {
      setLoading(true)
      fetch(RandomDog)
        .then((res) => res.json())
        .then((data) => setAnimal(data))
        .finally(() => setLoading(false))
  }

  const isShakingEnough = (data) => {
      const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
      return totalForce > 1.78
  }

  return (
      <AnimalContainer>
            <TitleText>Random Dogs!</TitleText>
            {loading && <ActivityIndicator size="large" color="blue" />}
            <Image source = {{uri: animal.url}}
            style = {{ width: 200, height: 200, borderRadius: 10, margin: 10}}
            />
      </AnimalContainer>
    )
  }

  export default ShakeDog