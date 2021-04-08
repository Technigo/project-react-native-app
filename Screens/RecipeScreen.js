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

  const getRandomNumber = (maxNum) => Math.floor(Math.random() * maxNum)

  useEffect(() => {
    fetch(API_URL(dishQuery, cuisineQuery, dietQuery))
      .then(res => res.json())
      .then(data => {
        setRecipes(data.results[getRandomNumber(data.results.length)])
      })
      .catch(err => console.err(err))

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