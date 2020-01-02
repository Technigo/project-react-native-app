import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'

export const isIngredient = (mealData) => {
  const regex = RegExp(/strIngredient/)
  return regex.test(mealData)
}

const isNotEmpty = (key) => {
  return recipe[key]
}

const ingredientKeys = recipe && Object.keys(recipe).filter(isIngredient).filter(isNotEmpty)   
const ingredients = ingredientKeys && ingredientKeys.map(key => recipe[key])

if (!ingredients) {
  return null
}

{ingredients.map(ingredient => {
  return {ingredient}
  })}