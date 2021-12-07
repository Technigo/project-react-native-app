import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';
import trails from '../.expo-shared/trails.json';

export const Trail = () => {
  const [subscription, setSubscription] = useState(null);
  const [selectedTrail, setSelectedTrail] = useState(0);

  const currentPosition = useSelector((store) => store.trails.currentPosition);

  const currentTrails = trails[currentPosition];

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    randomizeTrail();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      randomizeTrail();
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

  const randomizeTrail = () => {
    const randomTrailNumber = Math.floor(Math.random() * currentTrails.length);
    setSelectedTrail(currentTrails[randomTrailNumber]);
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  return (
    <View>
      <Title>
        You are in the {currentPosition} of Sweden, shake for a suggestion on a
        trail!
      </Title>
      <SuggestionBox>
        <Title2>{selectedTrail.trail}</Title2>
        <Text>{selectedTrail.description}</Text>
        <BigGreen>{selectedTrail.trail_km}</BigGreen>
      </SuggestionBox>
    </View>
  );
};

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;

const Title2 = styled.Text`
  font-size: 15px;
  text-align: left;
  color: palevioletred;
`;

const BigGreen = styled.Text`
  font-size: 30px;
  color: #1e5f18;
  margin-top: 10;
`;

const SuggestionBox = styled.View`
  padding: 20px 10px;
`;
