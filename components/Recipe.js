import React from "react"
import styled from "styled-components/native"
import { TouchableOpacity } from "react-native"

const RecipeText = styled.Text`
  color: black;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
`

const RecipeImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`

const RecipeContainer = styled.View`
  justify-content: center;
  align-items: center;
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

const Recipe = ({ recipes, handleTap }) => {
  return (
    <>
      {recipes.map(recipe => (
        <TouchableOpacity onPress={() => handleTap(recipe.id)}>
          <RecipeContainer key={recipe.id}>
            <RecipeImage source={{ uri: recipe.image }} />
            <RecipeText >{recipe.title}</RecipeText>
          </RecipeContainer>
        </TouchableOpacity>
      ))}
      <InstructionsText>
        Like what you see? Tap the image to get the full recipe.
      </InstructionsText>
    </>
  )
}

export default Recipe