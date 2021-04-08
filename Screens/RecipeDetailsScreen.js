import React, { useEffect, useState } from "react"
import { Text } from "react-native"

import { DETAILS_URL } from "../utils/urls"
import RecipeDetails from "../components/RecipeDetails"

const RecipeDetailsScreen = ({ recipeId }) => {
  const [recipeDetails, setRecipeDetails] = useState([])
  const [sharedRecipe, setSharedRecipe] = useState("")

  useEffect(() => {
    fetch(DETAILS_URL(recipeId))
      .then(res => res.json())
      .then(data => {
        setRecipeDetails(data)
        setSharedRecipe(data.sourceUrl)
      })
  }, [recipeId])

  if (recipeDetails.length === 0) {
    return <Text>Loading...</Text>
  }

  return (
    <RecipeDetails
      recipeDetails={recipeDetails}
      sharedRecipe={sharedRecipe}
    />
  )
}

export default RecipeDetailsScreen