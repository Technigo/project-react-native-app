import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Quotes = ({ navigation }) => {
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
    </View>
  );
};

export default Quotes;
