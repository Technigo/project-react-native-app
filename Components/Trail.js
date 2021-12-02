import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';
import trails from '../.expo-shared/trails.json';

export const Trail = () => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(false);
  const currentPosition = useSelector((store) => store.trails.currentPosition);

  const currentTrails = trails[currentPosition];
  console.log(currentTrails.length);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  //This is seting a trail to start with. Figure out if want that to be set in the begining or not.
  useEffect(() => {
    generateTrail();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateTrail();
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

  const generateTrail = () => {
    setLoading(true);

    // En trail skall slumpas fram utifrån vilken av knapparna man tryckte på i första steget.
    /*  .finally(() => setLoading(false)); */
  };

  const randomTrailNumber = Math.floor(Math.random() * currentTrails.length);

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  const randomTrail = currentTrails[randomTrailNumber];

  return (
    <View>
      <Title>
        You are in the {currentPosition} of Sweden, shake for a suggestion on a
        trail!
      </Title>
      <View>
        <Text>Trail name: {randomTrail.trail}</Text>
        <Text>Trail description: {randomTrail.description}</Text>
      </View>
    </View>
  );
};

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;
