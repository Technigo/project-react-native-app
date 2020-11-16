import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import CustomTouchable from "./CustomTouchable";

import { API_URL, ENDPOINT_URL } from "../urls.js";
import { API_KEY, uid } from "../API_KEY.js";

const HomeContainer = styled.ImageBackground`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeTitle = styled.Text`
  flex: 2;
  width: 350px;
  margin: 75px auto 30px;
  font-size: 48px;
  font-weight: 800;
  text-align: center;
`;

const HomeText = styled.Text`
  flex: 1;
  width: 350px;
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px;
`;

const HomeScreen = ({ navigation }) => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    fetchQuoteList();
  }, []);

  const fetchQuoteList = () => {
    fetch(`${API_URL}${uid}&${API_KEY}${ENDPOINT_URL}`)
      .then((res) => res.json())
      .then((quotes) => {
        setQuoteList(quotes.result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigateToQuote = () => {
    navigation.navigate("Quote", { data: { quoteList }, currentQuote: quoteList[0].quote});
  };

  return (
    <HomeContainer
      source={{
        uri:
          "https://images.unsplash.com/photo-1554838171-7c78fbc3ff01?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      }}
    >
      <HomeTitle>Oscar Wilde quote-o-rama</HomeTitle>
      <HomeText>What would ol' Oscar say?</HomeText>
      <CustomTouchable
        onPress={navigateToQuote}
        top="80"
        text="Press to find out"
      />
    </HomeContainer>
  );
};

export default HomeScreen;
