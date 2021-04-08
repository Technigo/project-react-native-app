import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import { useRoute } from '@react-navigation/native';
import RecipePage from '../screens/RecipePage';

import { SEARCH_RECIPE } from '../reusables/urls'

const RecipeDetail = () => {
  const route = useRoute()
  const [recipeInfo, setRecipeInfo] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(SEARCH_RECIPE(route.params.caption))
      .then((response) => response.json())
      .then((receivedRecipe) => {
        setRecipeInfo(receivedRecipe)
        setLoading(false)
      })
  }, [])

  console.log(recipeInfo)
  if (loading) {
    return (<Title> Recipe is loading</Title>)
  } else {
    return (
      <>
        {recipeInfo &&
          (<Container>
            <ImageContainer>
              <ImageCard source={{ uri: recipeInfo[0].image }} />
              <TextContainer >
                <Title>
                  {recipeInfo[0].label}
                </Title>
                <DetailsContainer>
                  <DetailsText>{`${Math.round((Number(recipeInfo[0].calories)/Number(recipeInfo[0].totalWeight))*100)} callories`}</DetailsText>
                  <DetailsText>{`| ${recipeInfo[0].ingredients.length} ingredients`}</DetailsText>
                  <DetailsText>{recipeInfo[0].totalTime > 0 && `| ${Math.round(recipeInfo[0].totalTime)} minutes`}</DetailsText>
                </DetailsContainer>
              </TextContainer>
            </ImageContainer>
            <SubTitle>Ingredients</SubTitle>
            {recipeInfo[0].ingredientLines.map(line => <IngredientLine key={line}>{line}</IngredientLine> )}
            <SubTitle>Nutrition</SubTitle>
            <NutritionContainer horizontal={true}>
              {recipeInfo[0].digest.map((nutrient) => {
                return (
                <NutrientContainer >
                  <NutrientText>{nutrient.label}</NutrientText>
                  <NutrientText>{`${Math.round((nutrient.total/nutrient.daily)*100)}%`}</NutrientText>
                  <NutrientText>dv</NutrientText>
                </NutrientContainer>
                )
              })}
            </NutritionContainer>

          </Container>)}
      </>
    )
  }
}

export default RecipeDetail


const Container = styled.View`
  position: relative;
`
const Title = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
  font-family: Arial;
  margin-bottom: 5px;
`
const ImageContainer = styled.View`
  width: 100%;
  position: relative;
`
const TextContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px;
  background-color: rgba(33, 32, 32, 0.5);
  width:100%;
`
const DetailsContainer = styled.View`
  flex-direction: row;
`
const ImageCard = styled.Image`
  width: 100%;
  height: 400px;
`

const DetailsText = styled.Text`
  font-size: 16px;
  margin: 2px;
  color: white;
`
const SubTitle = styled.Text`
  color: black;
  font-size: 22px;
  font-weight: bold;
  font-family: Arial;
  margin: 10px 0 5px 5px;
`

const IngredientLine = styled.Text`
  font-size: 16px;
  margin: 5px;
  color: black;
`
const NutritionContainer = styled.ScrollView`
  position: relative;
  margin-bottom: 20px;
`
const NutrientContainer = styled.View `
  border: 1px solid black;
  border-radius: 50;
  margin: 5px;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(33, 32, 32, 0.2);
`
const NutrientText = styled.Text `
  font-size: 10px;
  margin: 2px;
  color: black;
  text-align:center;
`