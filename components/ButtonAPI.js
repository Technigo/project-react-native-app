import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from "react-native";
import styled from "styled-components/native"; // use /native when you are styling core components
import * as Location from "expo-location";

const QuoteText = styled.Text`
  font-weight: 700;
`;

const APIButton = styled.TouchableHighlight`
  width: 50%;
  background-color: pink;
`;

const ButtonAPI = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };
  // v1 promise
  const getLocation = () => {
    let data = Location.requestForegroundPermissionsAsync()
      .then((data) => {
        console.log("DATA", data);
        if (data.status !== "granted") {
          console.log("Permission to access location was denied");
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

  //v2 async await
  0;
  // const getLocation = async () => {
  // let data = await Location.requestForegroundPermissionsAsync();
  //     if (data.status !== "granted") {
  //     console.log("Permission to access location was denied");
  //   } else {
  //     const locationData = await Location.getCurrentPositionAsync({});
  //     console.log('locationdata', locationData)
  //   }
  // }

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>Click button to generate quote!</Text>
      <APIButton onPress={generateQuote}>
        <Text>Click!</Text>
      </APIButton>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Author: {quote.author}</Text>
      <Button onPress={getLocation} />
    </View>
  );
};

export default ButtonAPI;
