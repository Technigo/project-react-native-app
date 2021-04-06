import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Ingredient = ({ ingredient, ingredientQuery, setIngredientQuery }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (isAdded) {
      setIngredientQuery({ ...ingredientQuery, [ingredient]: true })
    } else {
      setIngredientQuery({ ...ingredientQuery, [ingredient]: false })
    }
  }, [isAdded])


  const toggleSwitch = () => {
    setIsAdded(previousState => !previousState)
  };



  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <Text>Click to add {ingredient}</Text>
    </TouchableOpacity>
  )
}

export default Ingredient