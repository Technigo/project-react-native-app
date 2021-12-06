import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Button, Linking, Image, ImageBackground } from "react-native";
import styled from "styled-components/native";
import * as Location from "expo-location";

const SuggestionText = styled.Text`
  font-weight: 700;
`;

const APIButton = styled.TouchableOpacity`
  width: 20%;
  background-color: green;
  font-size: 10px;
  border: 2px solid black;
  border-radius: 3px;
  align-items: center;
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
    fetch("https://www.boredapi.com/api/activity", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };

  // v1 - Promise
  const getLocation = () => {
    Location.requestForegroundPermissionsAsync()
      .then((data) => {
        if (data.status !== "granted") {
          console.log("Permission to access location was denied");
        } else {
          return Location.getCurrentPositionAsync({});
        }
      })
      .then((locationData) => {
        Linking.openURL(`http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`);
      });
  };

  // v2 - Async await
  // const getLocation = async () => {
  // 	const data = await Location.requestForegroundPermissionsAsync();
  // 	if (data.status !== 'granted') {
  // 		console.log('Permission to access location was denied');
  // 	} else {
  // 		const locationData = await Location.getCurrentPositionAsync({});
  // 		Linking.openURL(
  // 			`http://www.google.com/maps/place/${locationData.coords.latitude},${locationData.coords.longitude}`
  // 		);
  // 	}
  // };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Text>Click for a suggestion if you are bored?</Text>
      <APIButton onPress={generateQuote}>
        <Text>Click</Text>
      </APIButton>

      <SuggestionText>Activity: {quote.activity}</SuggestionText>
      <Text>Participants: {quote.participants}</Text>
      <Text>Price: {quote.price}</Text>

      {/* <LocationView>
        <Text>Get your location to see, where you are now?</Text>
        <Button title="Get location" onPress={getLocation} />
        <Text>If you can not do your activity click another suggestion..</Text>
      </LocationView> */}
    </>
  );
};

export default ButtonApi;
