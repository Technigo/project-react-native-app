import React, { useState } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styled from "styled-components/native";

const QuoteText = styled.Text`
  font-weight: 700;
`;

const ApiButton = styled.TouchableHighlight`
  width: 50%;
  background-color: green;
`;

const ButtonApi = () => {
  const [quote, setQuote] = setState({});

  const generateQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  return (
    <View>
      <Text>Click on the button! </Text>
      <ApiButton onPress={generateQuote}>
        <Text>Touch Here</Text>
      </ApiButton>
      <Text>Quote:{guote.content} </Text>
      <Text> Author:{quote.author} </Text>
    </View>
  );
};
