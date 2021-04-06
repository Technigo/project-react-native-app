import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Ingredient = ({ ingredient, ingredientQuery }) => {
  const [isAdded, setIsAdded] = useState(false);

  if (isAdded) {
    ingredientQuery[ingredient] = true
    console.log(`${ingredient} added:`, ingredientQuery)
  } else {
    ingredientQuery[ingredient] = false
    console.log(`${ingredient} removed`, ingredientQuery)
  }

  const toggleSwitch = () => {
    setIsAdded(previousState => !previousState)
  };



  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <Text>click me to add {ingredient}</Text>
    </TouchableOpacity>
  )
}

export default Ingredient