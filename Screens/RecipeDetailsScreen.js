import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import styled from "styled-components/native"

import { DETAILS_URL } from "../utils/urls"


const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`

const RecipeDetailsScreen = ({ navigation, dishQuery, ingredientQuery, dietQuery, recipeId, isMixingIngredients, setIsMixingIngredients }) => {
  const [recipeDetails, setRecipeDetails] = useState([])

  useEffect(() => {
    console.log(recipeId)
    console.log(DETAILS_URL(recipeId))

    fetch(DETAILS_URL(recipeId))
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRecipeDetails(data)
      })

  }, [recipeId])

  if (recipeDetails.length === 0) {
    return <Text>Loading...</Text>
  }

  return (
    <Container>
      <Text>{recipeDetails.title}</Text>
      {recipeDetails.extendedIngredients.map(ingredient => (
        <Text>{ingredient.name}</Text>
      ))}
    </Container>
  )
}

export default RecipeDetailsScreen