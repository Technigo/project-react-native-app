import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

import { View, Text, TouchableOpacity } from "react-native";

import { URL } from "./utils/urls";

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.80;
};

export const SensorComponent = () => {
  const [quote, setQuote] = useState({});

  const DisplayQuote = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };
  useEffect(() => {
    DisplayQuote();
  }, []);

  Accelerometer.setUpdateInterval(400);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);

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

  useEffect(() => {
    _subscribe();

    return () => _unsubscribe();
  }, []);

  return (
    <View>
      <View>{isShaking(data) && DisplayQuote()}</View>
      <Text>{quote.content}</Text>
      <Text>{quote.author}</Text>
      <TouchableOpacity onPress={DisplayQuote}>
        <Text>Quote</Text>
      </TouchableOpacity>
    </View>
  );
};
