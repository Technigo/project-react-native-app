import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, ImageBackground, Vibration  } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';

// styled components
const AnimalContainer = styled.View`
    border-radius: 10px;
    padding: 20px;
    margin: 0 10%;
    justify-content: center;
    align-items: center;
`
const TextContainer = styled.View`
    margin: 10px 0 10px 0;
    width: 280px;
    justify-content: center;
`
const TitleText = styled.Text`
    font-family: 'BubbleShine';
    font-size: 60px;
    text-align: center;
    color: black;
`
const GenerateButton = styled.TouchableOpacity`
    background-color: lightblue;
    margin: 10px 0 10px 0;
    width: 280px;
    padding: 16px;
    border-radius: 10px;
    justify-content: center;
`
const ButtonText = styled.Text`
    text-align: center;
    color: white;
    font-weight: 700;
`
const SmallText = styled.Text`
    font-size: 8px;
`

// API URL
const RandomDog = 'https://random.dog/woof.json' //.url

// Shake function
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

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.75
  }

  // Fetch random animal
  const generateAnimal = () => {
      Vibration.vibrate(400, false)
      setLoading(true)
      fetch(RandomDog)
        .then((res) => res.json())
        .then((data) => setAnimal(data))
        .finally(() => setLoading(false))
  }

  const [loaded] = useFonts({
		BubbleShine: require('../assets/fonts/BubbleShine.ttf'),
	  });
	  
	  if (!loaded) {
		return null;
	  }

  return (
    <ImageBackground source={require('../assets/swirl_pattern.png')} style={{width: '100%', height: '100%'}} imageStyle={{resizeMode: 'repeat'}}>
      <AnimalContainer>
            <TextContainer><TitleText>Random Dogs!</TitleText></TextContainer>
            {loading && <ActivityIndicator size="large" color="blue" />}
            <Image source = {{uri: animal.url}}
            style = {{ width: 280, height: 280, borderRadius: 10, margin: 10}}
            />
            <GenerateButton onPress={generateAnimal}><ButtonText>Shake phone or Click! for a new dog</ButtonText></GenerateButton>
            <SmallText>Sometimes the dogs can take some time to load!</SmallText>
      </AnimalContainer>
      </ImageBackground>
    )
  }

  export default ShakeDog