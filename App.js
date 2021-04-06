import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'


import {SEARCH_URL} from './reusables/urls'
import  RecipeThumb  from './components/RecipeThumb'

const Container = styled.ScrollView`
  background-color: white;
  padding: 8px;
  padding-top: 30;
`

const Title = styled.Text`
  font-size: 24px;
  color: black;
`


const App = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(()=> {
    fetch(SEARCH_URL)
      .then(response => response.json())
      .then(receivedRecipes => setRecipes(receivedRecipes.hits))
  },[])

  console.log(recipes)
  return (
    <Container>
      <Title>Choose your recipe here!</Title>
      {recipes.map((item) => <RecipeThumb key={item.recipe.uri} item={item} />)}
      

    </Container>
  )
}

export default App
