import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CustomTouchable from "./CustomTouchable";

const QuoteContainer = styled.View`
  background-color: #0096c9;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const QuoteText = styled.Text`
  color: white;
  font-size: 32px;
`;

const QuoteScreen = ({ navigation, route }) => {
  const [currentQuote, setCurrentQuote] = useState({quote:"Hello!"});

  
  const getQuote = () => {
      const quote = route.params.data.quoteList[Math.floor(Math.random() * route.params.data.quoteList.length)];
      setCurrentQuote(quote);
      console.log(currentQuote);
    }
  
    return (
    <QuoteContainer>
      <QuoteText>{currentQuote.quote}</QuoteText>
      <CustomTouchable onPress={getQuote} text="Want some more?" />
    </QuoteContainer>
  );
};

export default QuoteScreen;