import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { Text } from "react-native"

import { API_URL } from "../utils/urls"
import Recipe from '../components/Recipe';

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`

const ErrorText = styled.Text`
  padding: 20px;
  font-size: 20px;
  text-align: center;
`

const RecipeScreen = ({ navigation, dishQuery, cuisineQuery, dietQuery, setRecipeId, setIsMixingIngredients }) => {
  const [recipes, setRecipes] = useState()

  const handleTap = (id) => {
    setRecipeId(id)
    navigation.navigate("Recipe Details")
  }

  useEffect(() => {
    fetch(API_URL(dishQuery, cuisineQuery, dietQuery))
      .then(res => res.json())
      .then(data => setRecipes(data.results))

    setIsMixingIngredients(false)
  }, [cuisineQuery])

  if (recipes === undefined) {
    return <Text>Loading...</Text>
  }

  if (recipes.length === 0) {
    return <ErrorText>Oops, something went wrong. There are no recipes that match your search. Try to go back and change your search!</ErrorText>
  }

  return (
    <Container>
      <Recipe
        recipes={recipes}
        setRecipeId={setRecipeId}
        handleTap={handleTap}
      />
    </Container>
  )
}

export default RecipeScreen