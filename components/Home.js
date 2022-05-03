import React, { useState, useEffect } from 'react'
import { Button, ScrollView } from "react-native";

import DisplayDrink from './DisplayDrink';
import DrinkNotFound from './DrinkNotFound';

import styled from "styled-components/native";

const Home = ({ navigation }) => {
  const [drink, setDrink] = useState({});
  const [inputValue, setInputValue] = useState("");

  const generateDrinks = async (inputValue) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`);
      const data = await response.json();
      setDrink(data?.drinks[0]);
    } catch (error) {
      console.log(error)
    } 
  };

  useEffect(() => {
    generateDrinks();
  }, []);

  return (
    <ScrollView>
      <ButtonWrapper>
        <Button
          title="Drinks List"
          onPress={() =>
            navigation.navigate('Drinks List')
          }
        />
        <Button
          title="Shake for a Random Drink"
          onPress={() =>
            navigation.navigate('Random Drinks', { title: "Shake Screen for a Random Drink" })
          }
        />
      </ButtonWrapper>
      <SearchSection>
        <Input
          placeholder="Search for a Drink"
          onChangeText={newValue => setInputValue(newValue)}  
          value={inputValue}
        />
        <Button
          title="Search"
          onPress={() => { generateDrinks(inputValue), setInputValue(""), setDrink({}) }}
        />
      </SearchSection>
      {drink?.strDrink ? <DisplayDrink drink={drink} /> : <DrinkNotFound /> }
    </ScrollView>
  );
};

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const SearchSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const Input = styled.TextInput`
  border: 2px solid black;
  padding: 7px;
  width: 300px;
`;

export default Home;