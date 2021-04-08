import React, { useEffect, useState } from "react"
import { ScrollView, View, Text, Image } from "react-native"
import styled from "styled-components/native"

const RecipeText = styled.Text`
  color: black;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
`

const RecipeImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`

const RecipeContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const InstructionsText = styled.Text`
  color: black;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  border-top-width: 1px;
  border-top-color: lightgrey;
`

const RecipeDetails = ({ recipeDetails }) => {

  if (recipeDetails.length === 0) {
    return <Text>Loading...</Text>
  }

  return (
    <>
      <RecipeContainer>
        <RecipeText>{recipeDetails.title}</RecipeText>
        <RecipeImage source={{ uri: recipeDetails.image }} />
        {recipeDetails.extendedIngredients.map(ingredient => (
          <Text key={ingredient.id} >{ingredient.name}</Text>
        ))}
      </RecipeContainer>
      <InstructionsText>
        Like what you see? Tap the image to get the full recipe. Or go back to change ingredients.
      </InstructionsText>
    </>
  )
}

export default RecipeDetails