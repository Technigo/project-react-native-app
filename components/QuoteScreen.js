import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import CustomTouchable from "./CustomTouchable";

const QuoteContainer = styled.ImageBackground`
  flex: 1;
  background-color: #0096c9;
  justify-content: center;
  align-items: center;
`;

const QuoteText = styled.Text`
  width: 350px;
  padding: 25px;
  color: white;
  background-color: rgba(255, 215, 0, 0.5);
  font-size: 32px;
  font-style: italic;
`;

const QuoteScreen = ({ navigation, route }) => {
  const [currentQuote, setCurrentQuote] = useState({});

  const randomQuote = () => {
    return route.params.data.quoteList[
      Math.floor(Math.random() * route.params.data.quoteList.length)
    ];
  };

  useEffect(() => {
    setCurrentQuote(randomQuote());
  }, []);

  const getQuote = () => {
    setCurrentQuote(randomQuote());
  };

  return (
    <>
      {route.params.data.quoteList !== undefined ? (
        <QuoteContainer
          source={{
            uri:
              "https://images.unsplash.com/photo-1585530416542-cf7058ed5f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
          }}
        >
          <QuoteText>{currentQuote.quote}</QuoteText>
          <CustomTouchable
            onPress={getQuote}
            top="10"
            text="Not enough? Press for more"
          ></CustomTouchable>
        </QuoteContainer>
      ) : (
        <QuoteContainer
          source={{
            uri:
              "https://images.unsplash.com/photo-1585530416542-cf7058ed5f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
          }}
        >
          <QuoteText>Out of quotes, try again tomorrow!</QuoteText>
        </QuoteContainer>
      )}
    </>
  );
};

export default QuoteScreen;
