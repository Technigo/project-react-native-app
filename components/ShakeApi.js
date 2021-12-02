import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

const ShakeApi = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
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
    if (isShaking(data)) {
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
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => setQuote(quote))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  return (
    <View>
      <Text>Shake to generate quote!</Text>
      <Text>Quote: {quote.content}</Text>
      <Text>Author: {quote.author}</Text>
    </View>
  );
};

export default ShakeApi;
