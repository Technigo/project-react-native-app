import React from "react";
import { Text } from "react-native";

const IngredientsList = ({ drink }) => {
  return (
    <>
      {drink?.strMeasure1 ? <Text>{drink?.strMeasure1} {drink?.strIngredient1} </Text> : null }
      {drink?.strMeasure2 ? <Text>{drink?.strMeasure2} {drink?.strIngredient2}</Text> : null}
      {drink?.strMeasure3 ? <Text>{drink?.strMeasure3} {drink?.strIngredient3}</Text> : null}
      {drink?.strMeasure4 ? <Text>{drink?.strMeasure4} {drink?.strIngredient4}</Text> : null}
      {drink?.strMeasure5 ? <Text>{drink?.strMeasure5} {drink?.strIngredient5}</Text> : null}
      {drink?.strMeasure6 ? <Text>{drink?.strMeasure6} {drink?.strIngredient6}</Text> : null}
      {drink?.strMeasure7 ? <Text>{drink?.strMeasure7} {drink?.strIngredient7}</Text> : null}
      {drink?.strMeasure8 ? <Text>{drink?.strMeasure8} {drink?.strIngredient8}</Text> : null}
      {drink?.strMeasure9 ? <Text>{drink?.strMeasure9} {drink?.strIngredient9}</Text> : null}
      {drink?.strMeasure10 ? <Text>{drink?.strMeasure10} {drink?.strIngredient10}</Text> : null}
      {drink?.strMeasure11 ? <Text>{drink?.strMeasure11} {drink?.strIngredient11}</Text> : null}
      {drink?.strMeasure12 ? <Text>{drink?.strMeasure12} {drink?.strIngredient12}</Text> : null}
      {drink?.strMeasure13 ? <Text>{drink?.strMeasure13} {drink?.strIngredient13}</Text> : null}
      {drink?.strMeasure14 ? <Text>{drink?.strMeasure14} {drink?.strIngredient14}</Text> : null}
      {drink?.strMeasure15 ? <Text>{drink?.strMeasure15} {drink?.strIngredient15}</Text> : null}
    </>
  );
};

export default IngredientsList;