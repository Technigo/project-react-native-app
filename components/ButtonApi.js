import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

const QuoteText = styled.Text`
  font-weight: 700;
`;

const AuthorText = styled.Text``;

const HeaderText = styled.Text``;

const ButtonText = styled.Text`
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

const ApiButton = styled.TouchableOpacity`
  width: 50%;
  background-color: lightblue;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const ButtonApi = () => {
  const [quote, setQuote] = useState({}); //Initilized like empthy object
  const [loading, setLoading] = useState(false); //Initilized like empthy object

  useEffect(() => {
    generateQuote();
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
        <ButtonText>Click for quote!</ButtonText>
      </ApiButton>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Author: {quote.author}</Text>
    </View>
  );
};

export default ButtonApi;
