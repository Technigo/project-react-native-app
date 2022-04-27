import React from "react";
import { Text, View, Image } from "react-native";

const IngredientsList = ({ drink }) => {
  return (
    <>
      {drink.strMeasure1 && <Text>{drink.strMeasure1} {drink.strIngredient1} </Text>}
      {drink.strMeasure2 && <Text>{drink.strMeasure2} {drink.strIngredient2}</Text>}
      {drink.strMeasure3 && <Text>{drink.strMeasure3} {drink.strIngredient3}</Text>}
      {drink.strMeasure4 && <Text>{drink.strMeasure4} {drink.strIngredient4}</Text>}
      {drink.strMeasure5 && <Text>{drink.strMeasure5} {drink.strIngredient5}</Text>}
      {drink.strMeasure6 && <Text>{drink.strMeasure6} {drink.strIngredient6}</Text>}
      {drink.strMeasure7 && <Text>{drink.strMeasure7} {drink.strIngredient7}</Text>}
      {drink.strMeasure8 && <Text>{drink.strMeasure8} {drink.strIngredient8}</Text>}
      {drink.strMeasure9 && <Text>{drink.strMeasure9} {drink.strIngredient9}</Text>}
      {drink.strMeasure10 && <Text>{drink.strMeasure10} {drink.strIngredient10}</Text>}
      {drink.strMeasure11 && <Text>{drink.strMeasure11} {drink.strIngredient11}</Text>}
      {drink.strMeasure12 && <Text>{drink.strMeasure12} {drink.strIngredient12}</Text>}
      {drink.strMeasure13 && <Text>{drink.strMeasure13} {drink.strIngredient13}</Text>}
      {drink.strMeasure14 && <Text>{drink.strMeasure14} {drink.strIngredient14}</Text>}
      {drink.strMeasure15 && <Text>{drink.strMeasure15} {drink.strIngredient15}</Text>}
    </>
  )
};

export default IngredientsList;