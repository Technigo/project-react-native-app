import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styled from "styled-components/native"

import Recipe from '../components/Recipe';

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`

const RecipeScreen = ({ navigation, dishQuery, ingredientQuery, dietQuery, setRecipeId, isMixingIngredients, setIsMixingIngredients }) => {

  const handleClick = () => {
    navigation.navigate("Recipe Details")
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleClick}>
        <Recipe
          dishQuery={dishQuery}
          ingredientQuery={ingredientQuery}
          dietQuery={dietQuery}
          setRecipeId={setRecipeId}
          isMixingIngredients
          setIsMixingIngredients={setIsMixingIngredients}
        />
      </TouchableOpacity>
    </Container>
  )
}

export default RecipeScreen