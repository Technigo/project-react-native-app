import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Accelerometer } from "expo-sensors";

const QuoteText = styled.Text`
  font-weight: 700;
`;

const ButtonApi = () => {
  const [quote, setQuote] = useState({}); //Initilized like empthy object
  const [loading, setLoading] = useState(false); //Initilized like empthy object

  useEffect(() => {
    generateQuote();
  }, []);



  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    Accelerometer.setUpdateInterval(1000);
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



  const generateQuote = () => {
    setLoading(true);
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => setQuote(quote)) //quote is the second data that we recieve
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>Click button to generate quote</Text>
      <ApiButton onPress={generateQuote}>
        <Text>Click me!</Text>
      </ApiButton>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Author: {quote.author}</Text>
    </View>
  );
};

export default ButtonApi;
