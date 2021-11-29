import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: lightyellow;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.Text`
  font-size: 16px;
  color: hotpink;
  margin: 10px auto;
  text-align: center;
  max-width: 60%;
`;

const APIButton = styled.TouchableHighlight`
  padding: 5px;
  background-color: pink;
`;

const ButtonApi = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <Paragraph>Click button to generate another quote!</Paragraph>
      <APIButton onPress={generateQuote}>
        <Text>Click!</Text>
      </APIButton>
      <Paragraph>Quote: {quote.content}</Paragraph>
      <Paragraph>Author: {quote.author}</Paragraph>
    </Container>
  );
};

export default ButtonApi;
