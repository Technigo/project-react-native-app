import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
// import isIngredient from './functions'

const Wrapper = styled.View`
flex: 1
align-items: center;
justify-content: center;
background-color: black;
`
const Title = styled.Text`
color: white; 
font-size: 24px;
font-weight: 700;
margin: 10px;
`
const Food = styled.Image`
  height: 200px;
  width: 200px;
`

const Container = styled.View`
  flex: 1;
  margin: 0;
  flex-direction: row;
  `

  const Ingredients = styled.View`
    padding: 8px;
  `

  const Text = styled.Text`
  color: white; 
  display: flex;
  flex-direction: column;
  margin: 15px;
  `

  const fetchRecipe = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const json = await res.json()
    // TO REMOVE ALL DESSERT RECIPES
    if (json.meals.strCategory === 'Dessert') {
      return fetchRecipe()
    } else {
      return json.meals[0]
    }
  }

export default function App() {
  const [recipe, setRecipe] = useState(null)
  const {strMeal, strMealThumb, strInstructions} = recipe || {}

  // FILTER IN INGREDIENTS AND MEASURMENTS
  const isIngredient = (mealData) => {
    const regex1 = RegExp(/strIngredient/)
    return regex1.test(mealData)
  }

  const isMeasure = (mealData) => {
    const regex2 = RegExp(/strMeasure/)
    return regex2.test(mealData)
  }

  const isNotEmpty = (key) => {
    return recipe[key]
  }

  const ingredientKeys = recipe && Object.keys(recipe).filter(isIngredient).filter(isNotEmpty)   
  const ingredients = ingredientKeys && ingredientKeys.map(key => recipe[key])
  const measureKeys = recipe && Object.keys(recipe).filter(isMeasure).filter(isNotEmpty)
  const measures = measureKeys && measureKeys.map(key => recipe[key])
 
  useEffect (() => {
    fetchRecipe()
      .then((recipeData) => {
        setRecipe(recipeData)
      })
  }, [])

  if (!recipe || !ingredients) {
    return null
  }

  return (
    <Wrapper>
    <Title>{strMeal}</Title>
    <Food
          source={{uri: strMealThumb}}
        />
    <Text>{strInstructions}</Text> 
    <Container>
    <Ingredients>
    {ingredients.map(ingredient => {
    return <Text>{ingredient}</Text>
    })}
    </Ingredients>
    <Ingredients>
    {measures.map(measure => {
      return <Text>{measure}</Text>
    })}
    </Ingredients>
    </Container>
    </Wrapper>
  )
}