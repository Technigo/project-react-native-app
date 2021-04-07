import React from "react"
import { Text, View } from "react-native"
import styled from "styled-components/native"

import Recipe from '../components/Recipe';

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`

const RecipeScreen = ({ navigation, dishQuery, ingredientQuery, dietQuery, isMixingIngredients, setIsMixingIngredients }) => {
  return (
    <Container>
      <Recipe
        dishQuery={dishQuery}
        ingredientQuery={ingredientQuery}
        dietQuery={dietQuery}
        isMixingIngredients
        setIsMixingIngredients={setIsMixingIngredients}
      />
    </Container>
  )
}

export default RecipeScreen