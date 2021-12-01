import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

const Quote = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.textYellow};
`;

const Paragraph = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.textYellow};
`;

const ShakePhone = () => {
  // used to store the current position of the phone
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [quote, setNewQuote] = useState({});
  const [loading, setLoading] = useState(false);
  // outside of the scope of bootcamp, communication between sensor and our code
  const [subscription, setSubscription] = useState(null);

  // semantically, useEffects should be separated
  useEffect(() => {
    generateQuote();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateQuote();
    }
  }, [data]);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generateQuote = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((json) => setNewQuote(json))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce =
      Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Paragraph>Shake to generate secret!</Paragraph>
      <Quote>Quote: {quote.content}</Quote>
      <Paragraph>Author: {quote.author}</Paragraph>
    </View>
  );
};

export default ShakePhone;
