import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";

const TheQuote = styled.Text`
  font-size: 24px;
`;

const ButtonApi = () => {
  const [quote, setNewQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((json) => setNewQuote(json))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <Text>Click to generate secret!</Text>
      <TouchableOpacity onPress={() => generateQuote()}>
        <Text>Click!</Text>
      </TouchableOpacity>
      <TheQuote>Quote: {quote.content}</TheQuote>
      <Text>Author: {quote.author}</Text>
    </View>
  );
};

export default ButtonApi;
