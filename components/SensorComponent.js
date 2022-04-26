import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';

const ShakeApi = () => {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    fetch('https://friends-quotes-api.herokuapp.com/quotes/random')
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };
  const APIButton = styled.TouchableOpacity`
    font-weight: 700;
    width: 50%;
    background-color: tomato;
  `;
  useEffect(() => {
    generateQuote();
  }, []);

  //////////////////////////

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  //   const _slow = () => {
  //     Accelerometer.setUpdateInterval(1000);
  //   };

  //   const _fast = () => {
  //     Accelerometer.setUpdateInterval(16);
  //   };
  const { x, y, z } = data;

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

  useEffect(() => {
    // component mounts execute the function below
    subscribe();

    // component unmounts execute the function in the return statement
    return () => unsubscribe();
  }, []);

  //////////////////////////
  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  useEffect(() => {
    if (isShaking(data)) {
      generateQuote();
    }
  }, [data]);

  return (
    <View>
      {/* <Text>{data.x}</Text>
            <Text>{data.y}</Text>
            <Text>{data.z}</Text> */}
      <Text>{quote.quote}</Text>
      <Text>{quote.character}</Text>
    </View>
  );
};

export default ShakeApi;
