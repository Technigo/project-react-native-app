import React from "react";

import IngredientsList from "./IngredientsList";

import styled from "styled-components/native";

const DisplayDrink = ({ drink }) => {
  return (
    <Wrapper>
      <Image source={{ uri: drink?.strDrinkThumb }}></Image>
      <SubTitle>{drink?.strDrink}</SubTitle>
      <Texts>Drink ingredients</Texts>
      <IngredientsList drink={drink} />
      <Texts>How to mix</Texts>
      <SubText>{drink?.strInstructions}</SubText>
    </Wrapper>
  );
};

const Wrapper = styled.ScrollView`
  width: 350px;
  margin: 0 auto;
`;

const Image = styled.Image`
  width: 350px;
  height: 300px;
  border-radius: 25px;
`;

const SubTitle = styled.Text`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 700;
`;

const Texts = styled.Text`
  font-weight: 700;
  margin-top: 20px;
`;

const SubText = styled.Text`
  margin: 0 0 30px 0;
`;

export default DisplayDrink;