import React, { useState, useEffect } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";

const QuoteText = styled.Text`
  font-weight: bold;
`;

const ApiButton = styled.TouchableHighlight`
  width: 50%;
  background-color: coral;
`;

const ButtonApi = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setLoading(true);
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>Click button to generate quote!</Text>
      <ApiButton onPress={generateQuote}>
        <Text>Click</Text>
      </ApiButton>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Author: {quote.author}</Text>
    </View>
  );
};

export default ButtonApi;
