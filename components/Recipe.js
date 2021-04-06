import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"

import { API_URL } from "../utils/urls"

const Recipe = ({ ingredientQuery, dietQuery, setIsMixingIngredients }) => {
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])

  let preparedIngredients = []
  let preparedDiet = []

  const prepareIngredients = () => {
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
    prepareIngredients()
    console.log(preparedIngredients, preparedDiet)
    let preparedIngredientsString = preparedIngredients.join(",")
    let preparedDietString = preparedDiet.join(",")
    console.log(preparedIngredientsString, preparedDietString)
    // fetch(API_URL(preparedIngredientsString, preparedDietString))
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     console.log(API_URL(preparedIngredientsString, preparedDietString))
    //     setRecipes(data.results)
    //   })
    //   .catch(err => console.err(err))

    // setIsMixingIngredients(false)
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