import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import styled from "styled-components/native"

import { DETAILS_URL } from "../utils/urls"
import RecipeDetails from "../components/RecipeDetails"

const RecipeDetailsScreen = ({ recipeId }) => {
  const [recipeDetails, setRecipeDetails] = useState([])
  const [sharedRecipe, setSharedRecipe] = useState("")

  useEffect(() => {
    console.log(recipeId)
    console.log(DETAILS_URL(recipeId))

    fetch(DETAILS_URL(recipeId))
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRecipeDetails(data)
        setSharedRecipe(data.sourceUrl)
      })

  }, [recipeId])

  return (
    <RecipeDetails
      recipeDetails={recipeDetails}
      sharedRecipe={sharedRecipe}
    />
  )
}

export default RecipeDetailsScreen