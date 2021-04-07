import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"

import { API_URL } from "../utils/urls"

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
    console.log(preparedDish, preparedIngredients, preparedDiet)
    let preparedDishString = preparedDish.join(",")
    let preparedIngredientsString = preparedIngredients.join(",")
    let preparedDietString = preparedDiet.join(",")
    console.log(preparedDishString, preparedIngredientsString, preparedDietString)
    fetch(API_URL(preparedDishString, preparedIngredientsString, preparedDietString))
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(API_URL(preparedDishString, preparedIngredientsString, preparedDietString))
        setRecipes(data.results)
      })
      .catch(err => console.err(err))

    setIsMixingIngredients(false)
  }, [ingredientQuery])

  return (
    <View>
      <Text>Recipes:</Text>
      {recipes.map(recipe => (
        <Text key={recipe.id} >{recipe.title}</Text>
      ))}
    </View>
  )
}

export default Recipe