import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Linking,
  Image,
  ImageBackground,
} from 'react-native';
import styled from 'styled-components/native';
import * as Location from 'expo-location';

const QuoteText = styled.Text`
  font-weight: 700;
`;

const APIbutton = styled.TouchableOpacity`
  width: 50%;
  background-color: blue;
`;

const TechnigoImage = styled.Image`
  height: 238px;
`;

const ScreenBackground = styled.ImageBackground`
  height: 100%;
`;

const ButtonApi = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setLoading(true);
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => setQuote(quote))
      .finally(() => setLoading(false));
  };

  // v1 promise approach
  const getLocation = () => {
    Location.requestForegroundPermissionsAsync()
      .then((data) => {
        if (data.status !== 'granted') {
          console.log('Permission to access location was denied');
        } else {
          return Location.getCurrentPositionAsync({});
        }
      })
      .then((locationData) => {
        Linking.openURL(
          `http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`
        );
      });
  };

  // v2 async approach
  // const getLocation = async () => {
  //   let data = await Location.requestForegroundPermissionsAsync();
  //   if (data.status !== 'granted') {
  //     console.log('Permission to access location was denied');
  //   } else {
  //     let locationData = await Location.getCurrentPositionAsync({});
  //     console.log('locationData', locationData);
  //   }
  // };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ScreenBackground source={require('../assets/splash.png')}>
      <Text>Click to generate quote</Text>
      <APIbutton onPress={generateQuote}>
        <Text>click me!</Text>
      </APIbutton>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Author: {quote.author}</Text>
      <Button title="get location" onPress={getLocation} />
      <TechnigoImage
        source={require('../assets/favicon.png')}
        resizeMode="contain"
      />
    </ScreenBackground>
  );
};

export default ButtonApi;
