import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native'

import { SEARCH_RECIPE } from '../reusables/urls'
import ShareButton from '../components/ShareButton'
import AddFavouriteButton from '../components/AddFavouriteButton'

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

  if (loading) {
    return (<ActivityIndicator size="large" color="#6e8c6c" />)
  } else {
    return (
      <>
        {recipeInfo &&
          (<Container>
            <ImageContainer>
              <ImageCard source={{ uri: recipeInfo[0].image }} />
              <ShareButton recipe={recipeInfo[0]} />
              <AddFavouriteButton recipe={recipeInfo[0]}/>
              <TextContainer >
                <Title>
                  {recipeInfo[0].label}
                </Title>
                <DetailsContainer>
                  <DetailsText>{`${Math.round((Number(recipeInfo[0].calories) / Number(recipeInfo[0].totalWeight)) * 100)} callories`}</DetailsText>
                  <DetailsText>{`| ${recipeInfo[0].ingredients.length} ingredients`}</DetailsText>
                  <DetailsText>{recipeInfo[0].totalTime > 0 && `| ${Math.round(recipeInfo[0].totalTime)} minutes`}</DetailsText>
                </DetailsContainer>
              </TextContainer>
            </ImageContainer>
            <SubTitle>Ingredients</SubTitle>
            {recipeInfo[0].ingredientLines.map(line => <IngredientLine key={line}>{line}</IngredientLine>)}
            <SubTitle>Nutrition</SubTitle>
            <NutritionContainer horizontal={true}>
              {recipeInfo[0].digest.map((nutrient) => {
                return (
                  <NutrientContainer key={nutrient.label}>
                    <NutrientText>{nutrient.label}</NutrientText>
                    <NutrientText>{Math.round(nutrient.total)}</NutrientText>
                    <NutrientText>{nutrient.unit}</NutrientText>
                  </NutrientContainer>
                )
              })}
            </NutritionContainer>
            <SubTitle>Health Lables</SubTitle>
            <HealthLabelsContainer>

              {recipeInfo[0].healthLabels.map((label, index, array) => {
                if (index < array.length - 2) {
                  return <DetailsText key={label}>{label},</DetailsText>
                }
                if (index === array.length - 2) {
                  return <DetailsText key={label}>{label} and</DetailsText>
                }
                return <DetailsText key={label}>{label}</DetailsText>
              })}

            </HealthLabelsContainer>

          </Container>)}
      </>
    )
  }
}

export default RecipeDetail


const Container = styled.View`
  position: relative;
  background: #1D1E20;
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
  color: #6e8c6c;
  font-size: 22px;
  font-weight: bold;
  font-family: Arial;
  margin: 10px 0 5px 5px;
`

const IngredientLine = styled.Text`
  font-size: 16px;
  margin: 5px;
  color: white;
  background: #1D1E20;
`
const NutritionContainer = styled.ScrollView`
  position: relative;
  margin-bottom: 20px;
  background: #1D1E20;
`
const NutrientContainer = styled.View`
  border: 1px solid black;
  border-radius: 50;
  margin: 5px;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: #6e8c6c;
`
const NutrientText = styled.Text`
  font-size: 10px;
  margin: 2px;
  color: white;
  text-align:center;
`
const HealthLabelsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px;
  background: #1D1E20;
`