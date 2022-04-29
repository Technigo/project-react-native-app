import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styled from "styled-components/native";

const firstFetch = fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
const secondFetch = fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");

const options = {
  tagmode: "any",
  type: "GET",
  crossDomain: "true"
};

const DrinksList = () => {
  const [alcoholic, setAlcoholic] = useState([]);
  const [nonAlcoholic, setNonAlcoholic] = useState([]);

  useEffect(() => {
    Promise.all([firstFetch, secondFetch], options)
      .then(responses => {
        const arrayOfResponses = responses.map(res => res.json());
        return Promise.all(arrayOfResponses);
      })
      .then(data => { setAlcoholic(data[0]?.drinks), setNonAlcoholic(data[1]?.drinks) })
      .catch(error => console.log(error))
  }, []);

  return (
    <Container>
      <Titles>Alcoholic Drinks:</Titles>
      <Wrapper horizontal>
        {alcoholic?.map((drink) => (
          <View key={drink?.idDrink}>
          <Images
            source={{ uri: drink.strDrinkThumb }}
            resizeMode="cover" />
            <Text>{drink.strDrink}</Text>
          </View>
        ))}
      </Wrapper>
      <Titles>Non Alcoholic Drinks:</Titles>
      <Wrapper horizontal>
        {nonAlcoholic?.map((drink) => (
          <View key={drink?.idDrink}>
          <Images
            source={{ uri: drink?.strDrinkThumb }}
            resizeMode="cover" />
            <Text>{drink?.strDrink}</Text>
          </View>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.ScrollView`
  display: flex;
  text-align: center;
  padding: 10px;
`;

const Wrapper = styled.ScrollView`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Titles = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0 10px 0;
`;

const Images = styled.Image`
  display: flex;
  height: 350px;
  width: 300px;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
  border-radius: 5px;
`;

export default DrinksList;