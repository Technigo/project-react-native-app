import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"

import { SensorComponent } from '../components/SensorComponent';
import Ingredient from '../components/Ingredient';
import Diet from "../components/Diet"

const HomeScreen = ({ navigation, ingredientQuery, setIngredientQuery, dietQuery, setDietQuery, isMixingIngredients, setIsMixingIngredients }) => {

  const handleClick = () => {
    navigation.navigate("Recipe")
  }

  return (
    <View>

      <Ingredient
        ingredient="tomato"
        ingredientQuery={ingredientQuery}
        setIngredientQuery={setIngredientQuery}
      />

      <Ingredient
        ingredient="basil"
        ingredientQuery={ingredientQuery}
        setIngredientQuery={setIngredientQuery}
      />

      <Diet
        label="vegetarian"
        dietQuery={dietQuery}
        setDietQuery={setDietQuery}
      />

      <TouchableOpacity onPress={handleClick}>
        <Text>
          Click to mix ingredients
        </Text>
      </TouchableOpacity>

      {/* <SensorComponent setIsMixingIngredients={setIsMixingIngredients} /> */}

    </View >
  )
}

export default HomeScreen