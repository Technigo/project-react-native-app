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
  font-size: 22px;
  color: hotpink;
  margin: 40px 50px;
  text-align: center;
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
    fetch("https://api.kanye.rest/")
      .then((res) => res.json())
      .then((quote) => setQuote(quote))
      .finally(() => setLoading(false));
    console.log("QUOTE", quote);
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <Paragraph>"{quote.quote}"</Paragraph>
      <APIButton onPress={generateQuote}>
        <Text> Click! </Text>
      </APIButton>
    </Container>
  );
};

export default ButtonApi;
