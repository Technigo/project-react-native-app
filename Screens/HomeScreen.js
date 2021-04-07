import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"

import { SensorComponent } from '../components/SensorComponent';
import Dish from "../components/Dish"
import Ingredient from '../components/Ingredient';
import Diet from "../components/Diet"

const HomeScreen = ({ navigation, dishes, dishQuery, setDishQuery, ingredientQuery, setIngredientQuery, dietQuery, setDietQuery, isMixingIngredients, setIsMixingIngredients }) => {

  const handleClick = () => {
    navigation.navigate("Recipe")
  }

  return (
    <View>
      <View>
        {dishes.map(dish => (
          <Dish
            key={dish}
            dish={dish}
            dishQuery={dishQuery}
            setDishQuery={setDishQuery}
          />
        ))}
      </View>

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