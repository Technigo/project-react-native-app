import React, { useEffect, useState } from "react"
import { ScrollView, View, Text, Image, TouchableOpacity, Alert } from "react-native"
import styled from "styled-components/native"
import * as Sharing from 'expo-sharing';

import Loading from "./Loading"

const RecipeText = styled.Text`
  color: black;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
`
const Paragraph = styled.Text`
  font-size: 16px;
  text-align: left;
`

const HeadingText = styled(Paragraph)`
  font-weight: 700;
  margin-bottom: 5px;
`

const RecipeImage = styled.Image`
  width: 100%;
  height: 200px;
`

const Subcontainer = styled.View`
  margin: 10px 0;
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
  margin-bottom: 20px;
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

  return (
    <>
      {/* <Loading /> */}
      <RecipeContainer>
        <RecipeText>{recipeDetails.title}</RecipeText>
        <TouchableOpacity onPress={shareRecipe}>
          <RecipeImage source={{ uri: recipeDetails.image }} />
        </TouchableOpacity>
        <Subcontainer>
          <HeadingText>Ingredients</HeadingText>
          {recipeDetails.extendedIngredients.map(ingredient => (
            <Paragraph key={ingredient.id} >🍴 {ingredient.name}</Paragraph>
          ))}
        </Subcontainer>
        <Subcontainer>
          <HeadingText>Instructions</HeadingText>
          <Paragraph>{recipeDetails.instructions.replace(/<\/?[^>]+>/gi, '')}</Paragraph>
        </Subcontainer>
        <InstructionsText>
          Sounds good? Tap the image to share the recipe with your friends!
      </InstructionsText>
      </RecipeContainer>
    </>
  )
}

export default RecipeDetails