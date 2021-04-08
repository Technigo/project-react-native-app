import React, { useEffect, useState } from "react"
import { ScrollView, View, Text, Image, TouchableOpacity, Alert } from "react-native"
import styled from "styled-components/native"
import * as Sharing from 'expo-sharing';

const RecipeText = styled.Text`
  color: black;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
`
const IngredientText = styled.Text`
  font-size: 16px;
  text-align: left;
`

const IngredientListText = styled(IngredientText)`
  font-weight: 700;
`

const RecipeImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`

const RecipeContainer = styled.ScrollView`
  padding: 20px;
`
const InstructionsText = styled.Text`
  color: black;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  border-top-width: 1px;
  border-top-color: lightgrey;
`


const RecipeDetails = ({ recipeDetails, sharedRecipe }) => {


  const shareRecipe = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      Alert.alert("Sorry, sharing not available on your platform")
      alert("Sorry, sharing not available on your platform")
      return
    }
    await Sharing.shareAsync(sharedRecipe)
  }

  const createAlert = () => {

  }

  if (recipeDetails.length === 0) {
    return <Text>Loading...</Text>
  }

  return (
    <>
      <RecipeContainer>
        <RecipeText>{recipeDetails.title}</RecipeText>
        <TouchableOpacity onPress={shareRecipe}>
          <RecipeImage source={{ uri: recipeDetails.image }} />
        </TouchableOpacity>
        <View>
          <IngredientListText>List of ingredients</IngredientListText>
          {recipeDetails.extendedIngredients.map(ingredient => (
            <IngredientText key={ingredient.id} >{ingredient.name}</IngredientText>
          ))}
        </View>
        <Text>{recipeDetails.instructions.replace(/<\/?[^>]+>/gi, '')}</Text>
        <InstructionsText>
          Sounds good? Tap the image to share the full recipe. Or go back to change ingredients.
      </InstructionsText>
      </RecipeContainer>
    </>
  )
}

export default RecipeDetails