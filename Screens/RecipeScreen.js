import React from "react"
import { Text, View } from "react-native"

import Recipe from '../components/Recipe';

const RecipeScreen = ({ navigation, ingredientQuery, dietQuery, isMixingIngredients, setIsMixingIngredients }) => {
  return (
    <View>
      <Recipe
        ingredientQuery={ingredientQuery}
        dietQuery={dietQuery}
        isMixingIngredients
        setIsMixingIngredients={setIsMixingIngredients}
      />
    </View>
  )
}

export default RecipeScreen