import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';

export const Trail = () => {
  const [subscription, setSubscription] = useState(null);

  const currentPosition = useSelector((store) => store.trails.currentPosition);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  //This is seting a trail to start with. Figure out if want that to be set in the begining or not.
  useEffect(() => {
    if (isShakingEnough(data)) {
      /* generateQuote(); */
    }
  }, [data]);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      /* generateQuote(); */
      return (
        <View>
          <Title>Hej</Title>
        </View>
      );
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
    </View>
  );
};

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;
