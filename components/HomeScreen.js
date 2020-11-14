import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CustomTouchable from "./CustomTouchable";

import { API_URL, ENDPOINT_URL } from "../urls.js";
import { API_KEY, uid } from "../API_KEY.js";

const HomeContainer = styled.View`
  background-color: #098fcf;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HomeText = styled.Text`
  font-size: 48px;
  display: flex;
  margin-bottom: 50px;
  text-align: center;
`;


const HomeScreen = ({ navigation }) => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    fetchQuoteList();
  }, []);

  const fetchQuoteList = () => {
    fetch(`${API_URL}${uid}&${API_KEY}${ENDPOINT_URL}`)
      .then((res) => res.json())
      .then((quotes) => {
        console.log(quotes.result);
        setQuoteList(quotes.result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigateToQuote = () => {
    navigation.navigate("Quote", { data: {quoteList} });
  };

  return (
    <HomeContainer>
      <HomeText>What would Oscar say?</HomeText>
      <CustomTouchable onPress={navigateToQuote} text="Press to find out" />
    </HomeContainer>
  );
};

export default HomeScreen;
