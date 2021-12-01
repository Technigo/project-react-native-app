import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Container = styled.Text`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const QuoteText = styled.Text`
  font-weight: 700;
`;

const AuthorText = styled.Text`
  font-style: italic;
`;

const HeaderText = styled.Text``;

const ButtonText = styled.Text`
  font-weight: 700;
`;

const ApiButton = styled.TouchableOpacity`
  width: 50%;
  background-color: lightblue;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
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
      <Container>
        <QuoteText>{quote.content}</QuoteText>
        <AuthorText>{quote.author}</AuthorText>
      </Container>
    </View>
  );
};

export default ButtonApi;
