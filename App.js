import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import RecipePage from './screens/RecipePage';

// import { SEARCH_URL } from './reusables/urls'
// import RecipeThumb from './components/RecipeThumb'
// import SearchForm from './components/SearchForm'
// import Filters from './components/Filters'

const Stack = createStackNavigator();

const App = () => {
  // const [recipes, setRecipes] = useState([])
  // const [searchWord, setSearchWord] = useState('')
  // const [filteredRecipes, setFilteredRecipes] = useState([])
  // const [search, setSearch] = useState('dinner')
  // const [ingredientsFilter, setIngredientsFilter] = useState(false)
  // const [glutenFilter, setGluteFilter] = useState(false)
  // const [calloriesFilter, setCalloriesFilter] = useState(false)

  // const handleSubmit = () => {
  //   setSearch(searchWord)
  // }

  // useEffect(() => {
  //   fetch(SEARCH_URL(search, ingredientsFilter))
  //     .then(response => response.json())
  //     .then(receivedRecipes => setRecipes(receivedRecipes.hits))
  // }, [search, ingredientsFilter])

  // useEffect(() => {
  //   let newFilteredRecipes = [...recipes]
  //   if (calloriesFilter) {
  //     newFilteredRecipes  = newFilteredRecipes.filter((item) => {
  //       const calories = Math.round((Number(item.recipe.calories) / Number(item.recipe.totalWeight)) * 100)
  //       if (calories < 150) {
  //         return item
  //       }
  //     })
  //   }
  //   if (glutenFilter) {
  //     newFilteredRecipes = newFilteredRecipes.filter((item) => item.recipe.healthLabels.includes('Gluten-Free'))
  //   }
  //   setFilteredRecipes(newFilteredRecipes)
  // }, [calloriesFilter, glutenFilter, recipes])

  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Recipe" component={RecipePage}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const Container = styled.ScrollView`
  background-color: white;
  padding: 1px;
  padding-top: 30;
`

const Title = styled.Text`
  font-size: 24px;
  color: black;
  margin: 20px 0 0 5px;
`
