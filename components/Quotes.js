import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Quotes = () => {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    fetch('https://friends-quotes-api.herokuapp.com/quotes/random')
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };
  const APIButton = styled.TouchableOpacity`
    font-weight: 700;
    width: 50%;
    background-color: tomato;
  `;
  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <View>
      <Text>{quote.quote}</Text>
      <Text>{quote.character}</Text>
      <APIButton onPress={generateQuote}>
        <Text>Generate quote</Text>
      </APIButton>
    </View>
  );
};

export default Quotes;
