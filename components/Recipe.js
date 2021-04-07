import React, { useEffect, useState } from "react"
import { ScrollView, View, Text, Image } from "react-native"
import styled from "styled-components/native"


import { API_URL } from "../utils/urls"

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

const Recipe = ({ dishQuery, ingredientQuery, dietQuery, setIsMixingIngredients }) => {
  const [recipes, setRecipes] = useState([])

  let preparedDish = []
  let preparedIngredients = []
  let preparedDiet = []

  const prepareFetch = () => {

    for (const [key, value] of Object.entries(dishQuery)) {
      if (value) {
        preparedDish.push(key)
      }
    }
    for (const [key, value] of Object.entries(ingredientQuery)) {
      if (value) {
        preparedIngredients.push(key)
      }
    }
    for (const [key, value] of Object.entries(dietQuery)) {
      if (value) {
        preparedDiet.push(key)
      }
    }
  }

  useEffect(() => {
    prepareFetch()

    let preparedDishString = preparedDish.join(",")
    let preparedIngredientsString = preparedIngredients.join(",")
    let preparedDietString = preparedDiet.join(",")

    fetch(API_URL(preparedDishString, preparedIngredientsString, preparedDietString))
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRecipes(data.results)
      })
      .catch(err => console.err(err))

    setIsMixingIngredients(false)
  }, [ingredientQuery])

  return (
    <>
      {recipes.map(recipe => (
        <RecipeContainer key={recipe.id}>
          <RecipeImage source={{ uri: recipe.image }} />
          <RecipeText >{recipe.title}</RecipeText>
        </RecipeContainer>
      ))}
      <InstructionsText>
        Like what you see? Tap the image to get the full recipe. Or go back to change ingredients.
      </InstructionsText>
    </>
  )
}

export default Recipe