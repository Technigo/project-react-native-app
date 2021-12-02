import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
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

  //This is seting a trail to start with. Figure out if want that to be set in the begining or not.

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

  const { x, y, z } = data;

  return (
    <View>
      <Title>
        <Xyz>
          x {x}
          {'\n'}
        </Xyz>
        <Xyz>
          y {y}
          {'\n'}
        </Xyz>
        <Xyz>
          z {z}
          {'\n'}
        </Xyz>
        You are in the {currentPosition} of Sweden, shake for a suggestion on a
        trail!
      </Title>
      <View>
        <Text>Trail name: {selectedTrail.trail}</Text>
        <Text>Trail description: {selectedTrail.description}</Text>
      </View>
    </View>
  );
};

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;

const Xyz = styled.Text`
  font-size: 15px;
  text-align: left;
  color: black;
`;
