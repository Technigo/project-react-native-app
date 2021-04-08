import React, { useState, useEffect } from "react"
import styled from "styled-components/native"

import { API_URL } from "../utils/urls"
import Recipe from '../components/Recipe';

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`
const RecipeScreen = ({ navigation, dishQuery, cuisineQuery, dietQuery, setRecipeId, setIsMixingIngredients }) => {
  const [recipes, setRecipes] = useState([])

  const handleTap = (id) => {
    setRecipeId(id)
    navigation.navigate("Recipe Details")
  }

  useEffect(() => {
    fetch(API_URL(dishQuery, cuisineQuery, dietQuery))
      .then(res => res.json())
      .then(data => {
        setRecipes(data.results)
      })
      .catch(err => console.err(err))

    setIsMixingIngredients(false)
  }, [cuisineQuery])

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