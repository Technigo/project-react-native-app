import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";

const QuoteText = styled.Text`
  font-weight: 700;
`;

const APIButton = styled.TouchableHighlight`
  width: 50%;
  background-color: pink;
`;

const ButtonApi = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    setLoading(true);
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      //   .then((quote) => console.log(quote));
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>Click the button to get a quote!</Text>
      <APIButton onPress={getQuote}>
        <Text>CLick</Text>
      </APIButton>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Author: {quote.author}</Text>
    </View>
  );
};

export default ButtonApi;
