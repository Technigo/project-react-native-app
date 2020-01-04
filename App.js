import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import { ScrollView } from 'react-native';
// import isIngredient from './functions'

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
`

const Title = styled.Text`
  color: white; 
  font-size: 24px;
  font-weight: 700;
  margin: 20px;
`

const Food = styled.Image`
  
  height: 280px;
  width: 280px;
`

const Container = styled.View`
  
    margin: 0;
    flex-direction: row;
  `

  const Ingredients = styled.View`
    padding: 8px;
    max-width: 250px;
    height: 100%
    
  `

  const Text = styled.Text`
    color: white;
    font-size: 20px; 
    margin: 15px;
  `

  const IText = styled.Text`
  color: white;
  font-size: 16px; 
  display: flex;
  flex-direction: column;
  margin: 15px;
`
const Button = styled.TouchableOpacity`
  background: white;
  padding: 10px 20px;
  border-radius: 20;
  `

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 900;
`

  const fetchRecipe = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const json = await res.json()
    // TO REMOVE ALL DESSERT RECIPES
    if (json.meals[0].strCategory === 'Dessert') {
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

  const reload = () => {
    myWebView.reload()
  }

  return (
    <ScrollView>
    <Wrapper>
    <Title>{strMeal}</Title>
    <Food
          source={{uri: strMealThumb}}
        /> 
    <Text>{strInstructions}</Text>
    <Container>
    <Ingredients>
    {ingredients.map(ingredient => {
    return <IText>{ingredient}</IText>
    })}
    </Ingredients>
    <Ingredients>
    {measures.map(measure => {
      return <IText>{measure}</IText>
    })}
    </Ingredients>
    </Container>
    <Button onPress={()=>reload} title="reload">
        <ButtonText>NEXT</ButtonText>
      </Button>
    </Wrapper>
    </ScrollView>
  )
}