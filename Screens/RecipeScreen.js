import React, { useState, useEffect } from "react"
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

import { API_URL } from "../utils/urls"
import Recipe from '../components/Recipe';

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`
const RecipeScreen = ({ navigation, dishQuery, cuisineQuery, dietQuery, setRecipeId, isMixingIngredients, setIsMixingIngredients }) => {
  const [recipes, setRecipes] = useState([])

  const handleClick = () => {
    navigation.navigate("Recipe Details")
  }

  let preparedDish = []
  let preparedCuisine = []
  let preparedDiet = []

  const prepareFetch = () => {
    for (const [key, value] of Object.entries(dishQuery)) {
      if (value) {
        preparedDish.push(key)
      }
    }
    for (const [key, value] of Object.entries(cuisineQuery)) {
      if (value) {
        preparedCuisine.push(key)
      }
    }
    for (const [key, value] of Object.entries(dietQuery)) {
      if (value) {
        preparedDiet.push(key)
      }
    }
  }

  const getRandomNumber = (maxNum) => Math.floor(Math.random() * maxNum)

  useEffect(() => {
    prepareFetch()

    let preparedDishString = preparedDish.join(",")
    let preparedCuisineString = preparedCuisine.join(",")
    let preparedDietString = preparedDiet.join(",")

    fetch(API_URL(preparedDishString, preparedCuisineString, preparedDietString))
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRecipes(data.results[getRandomNumber(data.results.length)])
      })
      .catch(err => console.err(err))

    console.log(recipes)

    setIsMixingIngredients(false)
  }, [cuisineQuery])

  useEffect(() => {
    setRecipeId(recipes.id)
  }, [recipes])

  return (
    <Container>
      <TouchableOpacity onPress={handleClick}>
        <Recipe recipes={recipes} />
      </TouchableOpacity>
    </Container>
  )
}

export default RecipeScreen