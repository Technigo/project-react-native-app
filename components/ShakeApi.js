import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: lightyellow;
  justify-content: center;
  align-items: center;
`;

const QuoteText = styled.Text`
  font-size: 16px;
  color: hotpink;
  margin: 10px auto;
  text-align: center;
  max-width: 60%;
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

  useEffect(() => {
    generateQuote();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(500);
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
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    // x,y,z CAN be negative, force is directional
    // We take the absolute value and add them together
    // This gives us the total combined force on the device
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

    // If this force exceeds some threshold, return true, otherwise false
    // Increase this threshold if you need your user to shake harder
    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  const { x, y, z } = data;

  return (
    <Container>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <QuoteText>Author: {quote.author}</QuoteText>
    </Container>
  );
};

export default ShakeApi;
