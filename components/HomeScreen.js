import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

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

const TouchableText = styled.Text`
  background-color: #f3ff03;
  font-size: 32px;
  display: flex;
  flex: 2;
  width: 60%;
  text-align: center;
  padding: 20px;
  border-radius: 50%;
`;

const HomeScreen = ({ navigation }) => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    fetchQuoteList();
  }, []);

  const fetchQuoteList = () => {
    fetch(
      "https://www.abbreviations.com/services/v2/quotes.php?uid=8251&tokenid=xo3ggiSGR4Gjr0CO&searchtype=AUTHOR&query=Oscar+Wilde&format=json"
    )
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
      <TouchableOpacity onPress={navigateToQuote}>
        <TouchableText>Press to find out</TouchableText>
      </TouchableOpacity>
    </HomeContainer>
  );
};

export default HomeScreen;
