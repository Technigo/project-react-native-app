import React from "react"
import styled from "styled-components/native"
import { TouchableOpacity } from "react-native"

const RecipeText = styled.Text`
  color: black;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
  border-bottom-width: 3px;
  border-bottom-color: #ff5447;
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
  margin-bottom: 20px;
`

const Recipe = ({ recipes, handleTap }) => {
  return (
    <>
      {recipes.map(recipe => (
        <TouchableOpacity
          key={recipe.id}
          onPress={() => handleTap(recipe.id)}
        >
          <RecipeContainer>
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