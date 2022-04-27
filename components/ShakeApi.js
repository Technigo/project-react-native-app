import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styled from 'styled-components';
import { Accelerometer } from 'expo-sensors';

const Container = styled.View`
  flex: 1;
  background-color: rgb(255, 227, 239);
  justify-content: center;
  align-items: flex-start;
`;

const QuoteText = styled.Text`
  font-size: 25;
  margin: 10px;
`;

const QuoteCharacter = styled.Text`
  font-size: 20px;
  margin: 10px;
  font-style: italic;
`;

const NextQuote = styled.TouchableOpacity`
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  background-color: rgb(255, 199, 223);
`;

const ButtonText = styled.Text`
  font-size: 20px;
  padding: 13px;
`;

const ShakeApi = () => {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    fetch('https://friends-quotes-api.herokuapp.com/quotes/random')
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

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
    <Container>
      <QuoteText>{quote.quote}</QuoteText>
      <QuoteCharacter>- {quote.character}</QuoteCharacter>
      <NextQuote onPress={generateQuote}>
        <ButtonText>Give me a new quote!</ButtonText>
      </NextQuote>
    </Container>
  );
};

export default ShakeApi;
