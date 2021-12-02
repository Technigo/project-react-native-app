import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native"; // use /native when you are styling core components
import { useFonts, Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import { POEM_URL } from "../utils/Urls";
import { Accelerometer } from "expo-sensors";

// STYLED COMPONENTS

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e65c5d;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

const TitleText = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-size: 30px;
  font-weight: 800;
  color: #7ff9e1;
`;

const ShakePoem = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [poem, setPoem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generatePoem();
  }, []);

  useEffect(() => {
    // This function determines how often our program reads the accelerometer data in milliseconds
    Accelerometer.setUpdateInterval(1000);
    // Start listening to the data when this SensorComponent is active
    subscribe();
    // Stop listening to the data when we leave SensorComponent
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generatePoem();
    }
  }, [data]);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData);
      })
    );
  };

  // This will tell the device to stop reading Accelerometer data.
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generatePoem = () => {
    setLoading(true);
    fetch(POEM_URL)
      .then((res) => res.json())
      .then((data) => setPoem(data[0]))
      // .then((data) => setPoem(data))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Container>
      <TitleText>Title: {poem.title}</TitleText>
      {/* <Text>Written by: {poem.poet}</Text> */}
      <Text>{poem.content}</Text>
    </Container>
  );
};

export default ShakePoem;

{
  /* <View>
{poem.map(
  (poem) => (
    (<ActivityText>Title: {poem.title}</ActivityText>),
    (<Text>Poet: {poem.author}</Text>),
    (<Text>{poem.lines}</Text>)
  )
)}
</View> */
}
