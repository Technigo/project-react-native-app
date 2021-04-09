import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import { ActivityIndicator } from "react-native";

import { SEARCH_URL } from '../reusables/urls'
import RecipeThumb from '../components/RecipeThumb'
import SearchForm from '../components/SearchForm'
import Filters from '../components/Filters'


const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [search, setSearch] = useState('vegetarian')
  const [ingredientsFilter, setIngredientsFilter] = useState(false)
  const [glutenFilter, setGluteFilter] = useState(false)
  const [calloriesFilter, setCalloriesFilter] = useState(false)
  const [lactoseFilter, setLactoseFilter] = useState(false)
  const [peanutFilter, setPeanutFilter] = useState(false)
  const [accordionToggle, setAccordionToggle] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setSearch(searchWord)
  }

  useEffect(() => {
    setLoading(true)
    fetch(SEARCH_URL(search, ingredientsFilter))
      .then(response => response.json())
      .then(receivedRecipes => {
        setRecipes(receivedRecipes.hits)
        setLoading(false)
      })
  }, [search, ingredientsFilter])

  useEffect(() => {
    let newFilteredRecipes = [...recipes]
    if (calloriesFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((item) => {
        const calories = Math.round((Number(item.recipe.calories) / Number(item.recipe.totalWeight)) * 100)
        if (calories < 150) {
          return item
        }
      })
    }
    if (glutenFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((item) => item.recipe.healthLabels.includes('Gluten-Free'))
    }
    if (lactoseFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((item) => item.recipe.healthLabels.includes('Dairy-Free'))
    }
    if (peanutFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((item) => item.recipe.healthLabels.includes('Peanut-Free'))
    }
    setFilteredRecipes(newFilteredRecipes)
  }, [calloriesFilter, glutenFilter, lactoseFilter, peanutFilter, recipes])

  return (
    <Container >
      <Title>Search your recipe here!</Title>
      <SearchForm
        onSubmit={handleSubmit}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
      {loading ? <ActivityIndicator size="large" color="#6e8c6c" /> :
        <>
          <Collapse onToggle={() => setAccordionToggle(!accordionToggle)}>
            <CollapseHeader >
              <FilterIconWrapper onPress={() => setAccordionToggle(!accordionToggle)}>
                <Title>Filters</Title>
                <AntDesign
                  name={accordionToggle ? "upcircle" : "downcircle"}
                  size={24}
                  color={glutenFilter || calloriesFilter || ingredientsFilter || lactoseFilter || peanutFilter ? "#6e8c6c" : "white"}
                />
              </FilterIconWrapper>
            </CollapseHeader>
            <CollapseBody>
              <Filters
                ingredientsFilter={ingredientsFilter}
                setIngredientsFilter={setIngredientsFilter}
                glutenFilter={glutenFilter}
                setGluteFilter={setGluteFilter}
                calloriesFilter={calloriesFilter}
                setCalloriesFilter={setCalloriesFilter}
                lactoseFilter={lactoseFilter}
                setLactoseFilter={setLactoseFilter}
                peanutFilter={peanutFilter}
                setPeanutFilter={setPeanutFilter}
              />
            </CollapseBody>
          </Collapse>
          {filteredRecipes.map((item) => <RecipeThumb key={item.recipe.uri} item={item} />)}
        </>
      }
    </Container>
  )
}

export default Home

const Container = styled.ScrollView`
  background-color: black;
  padding: 1px;
  padding-top: 30;
`

const Title = styled.Text`
  font-size: 24px;
  color: white;
  margin: 5px;
  text-align: center;
`

const FilterIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`