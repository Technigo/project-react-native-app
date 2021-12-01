import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

const QuoteText = styled.Text`
  font-weight: 700;
`;

const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generateItems();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateItems();
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

  const generateItems = () => {
    setLoading(true);
    fetch(
      "https://api.smk.dk/api/v1/art/search/?keys=*&offset=0&rows=100&lang=en"
    )
      .then((res) => res.json())
      .then((data) => setItems(data))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <QuoteText>Quote: {items.techniques}</QuoteText>
      <Text>Author: {items.artist}</Text>
    </View>
  );
};

export default ShakeApi;
