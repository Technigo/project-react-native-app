import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const QuoteText = styled.Text`
  font-weight: 700;
`;

const SensorComponent = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((AccelerometerData) => {
        setData(AccelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  const { x, y, z } = data;

  return (
    <View>
      <QuoteText>Data x: {x}</QuoteText>
      <Text>Data y: {y}</Text>
      <Text>Data z: {z}</Text>
    </View>
  );
};

export default SensorComponent;
