import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.78;
};

const Container = styled.View`
  display: flex;
  text-align
  justify-content: center;
  font-family: monospace;
  margin-bottom: 20px;
  overflow-wrap:break-word;
`;

const Button = styled.TouchableOpacity`
display:flex;
border: solid 2px; 
width: 50%;
border-radius:5px;
padding:8px;
margin-left: 200px;
justify-content: center;
margin-top: 20px;
font-family: monospace;
box-shadow: 5px 5px #000;
background-color: pink;
`
  ;

export const SensorComponent = () => {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => setQuote(data))
  }
  useEffect(() => {
    generateQuote();
  }, [data]);

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
      {isShaking(data) && generateQuote()}
      <View>
        <Text> {quote.content} </Text>
        <Text> {quote.author} </Text>
        <Button onPress={TouchableOpacity}>
          <Text>New quote</Text>
        </Button>

      </View>
    </Container>
  );
};
