import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

import { URL } from "./utils/urls";

const Container = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  margin: 40px;
  padding: 0;
`;
const Quote = styled.Text`
  font-size: 35;
  line-height: 45;
  text-align: left;
`;
const AuthorContainer = styled.View`
  flex-direction: row;
  text-align: left;
  width: 300px;
  margin: 15px;
`;
const Author = styled.Text`
  font-style: italic;
  font-size: 15;
`;
const Button = styled.TouchableOpacity`
  background-color: #ffaf7b;
  padding: 20px;
  border-radius: 10px;
  width: 170px;
  align-items: center;
  position: absolute;
  bottom: 28px;
  margin-bottom: 10px;
`;
const ButtonText = styled.Text`
font-size: 15;
font-weight: 500;
`
const SmallText = styled.Text`
position: absolute;
  bottom: 10px;
`

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.8;
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
    <Container>
      {isShaking(data) && DisplayQuote()}
      <Quote>{quote.content}</Quote>
      <AuthorContainer>
        <Author>-{quote.author}</Author>
      </AuthorContainer>

      <Button onPress={DisplayQuote}>
        <ButtonText>New Quote</ButtonText>
      </Button>
        <SmallText>Or Shake your phone to get a new Quote</SmallText>
    </Container>
  );
};
