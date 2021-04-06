import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'


import {SEARCH_URL} from './reusables/urls'
import  RecipeThumb  from './components/RecipeThumb'
import SearchForm from './components/SearchForm'
import Filters from './components/Filters'


const App = () => {
  const [recipes, setRecipes] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [search, setSearch] = useState('dinner')
  const [filter, setFilter] = useState(false)

  const handleSubmit = () => {
    setSearch(searchWord)
  }

  useEffect(()=> {
    console.log(SEARCH_URL(search, filter))
    fetch(SEARCH_URL(search, filter))
      .then(response => response.json())
      .then(receivedRecipes => setRecipes(receivedRecipes.hits))
  },[search, filter])

  console.log(searchWord)
  return (
    <Container>
      <Title>Choose your recipe here!</Title>
      <SearchForm
        onSubmit={handleSubmit} 
        searchWord={searchWord} 
        setSearchWord={setSearchWord}
      />
      <Filters 
        filter={filter}
        setFilter={setFilter}
      />
      {recipes.map((item) => <RecipeThumb key={item.recipe.uri} item={item} />)}      
    </Container>
  )
}

export default App

const Container = styled.ScrollView `
  background-color: white;
  padding: 1px;
  padding-top: 30;
`

const Title = styled.Text `
  font-size: 24px;
  color: black;
  margin: 20px 0 0 5px;
`
