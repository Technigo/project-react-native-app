import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

const QuoteText = styled.Text`
  font-family: AbrilFatface_400Regular;
  font-size: 40px;
  color: #895cf4;
`;

const AuthorText = styled.Text`
  font-family: Poppins_300Light_Italic;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  font-weight: 700;
  font-family: Poppins_300Light;
`;

const ApiButton = styled.TouchableOpacity`
  width: 30%;
  background-color: #3acfa5;
  padding: 7px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px #30c59b;
  margin-top: 40px;
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
      <QuoteText>{quote.content}</QuoteText>
      <AuthorText>{quote.author}</AuthorText>
      <ApiButton onPress={generateQuote}>
        <ButtonText>New quote</ButtonText>
      </ApiButton>
    </View>
  );
};

export default ButtonApi;
