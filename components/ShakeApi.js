import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";
import { useFonts, Buda_300Light } from "@expo-google-fonts/buda";

const ActivityText = styled.Text`
  font-weight: 700;
`;

const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [fontsLoaded] = useFonts({
    Buda_300Light,
  });

  useEffect(() => {
    generateQuote();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateQuote();
    }
  }, [data]);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generateQuote = () => {
    setLoading(true);
    fetch("https://www.boredapi.com/api/activity", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading || !fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>Suggestion</Text>

      <ActivityText>Activity: {quote.activity}</ActivityText>
      <ActivityText>Participants: {quote.participants}</ActivityText>
      <ActivityText>Price: {quote.price}</ActivityText>
    </View>
  );
};

export default ShakeApi;
