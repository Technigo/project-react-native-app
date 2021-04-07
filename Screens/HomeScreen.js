import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"

import { SensorComponent } from '../components/SensorComponent';
import Dish from "../components/Dish"
import Ingredient from '../components/Ingredient';
import Diet from "../components/Diet"

const HomeScreen = ({ navigation, dishes, ingredients, diets, dishQuery, setDishQuery, ingredientQuery, setIngredientQuery, dietQuery, setDietQuery, isMixingIngredients, setIsMixingIngredients }) => {

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

      <View>
        {ingredients.map(ingredient => (
          <Ingredient
            key={ingredient}
            ingredient={ingredient}
            ingredientQuery={ingredientQuery}
            setIngredientQuery={setIngredientQuery}
          />
        ))}
      </View>

      <View>
        {diets.map(diet => (
          <Diet
            key={diet}
            label={diet}
            dietQuery={dietQuery}
            setDietQuery={setDietQuery}
          />
        ))}
      </View>

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