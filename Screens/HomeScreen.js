import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styled from "styled-components/native"

import { SensorComponent } from '../components/SensorComponent';
import Dish from "../components/Dish"
import Ingredient from '../components/Ingredient';
import Diet from "../components/Diet"

const Container = styled.ScrollView`
  flex: 1;
`

const ChoiceView = styled.View`
justify-content: center;
align-items: center;
border: 1px solid green;
`
const DishView = styled(ChoiceView)`
  
`
const IngredientView = styled(ChoiceView)`
  
`
const DietView = styled(ChoiceView)`
  flex-direction: row;
`

const HomeScreen = ({ navigation, dishes, ingredients, diets, dishQuery, setDishQuery, ingredientQuery, setIngredientQuery, dietQuery, setDietQuery, isMixingIngredients, setIsMixingIngredients }) => {

  const handleClick = () => {
    navigation.navigate("Random Recipe")
  }

  return (
    <Container>
      <DishView>
        {dishes.map(dish => (
          <Dish
            key={dish}
            dish={dish}
            dishQuery={dishQuery}
            setDishQuery={setDishQuery}
          />
        ))}
      </DishView>

      <IngredientView>
        {ingredients.map(ingredient => (
          <Ingredient
            key={ingredient}
            ingredient={ingredient}
            ingredientQuery={ingredientQuery}
            setIngredientQuery={setIngredientQuery}
          />
        ))}
      </IngredientView>

      <DietView>
        {diets.map(diet => (
          <Diet
            key={diet}
            label={diet}
            dietQuery={dietQuery}
            setDietQuery={setDietQuery}
          />
        ))}
      </DietView>

      <TouchableOpacity onPress={handleClick}>
        <Text>
          Click to mix ingredients
        </Text>
      </TouchableOpacity>

      {/* <SensorComponent setIsMixingIngredients={setIsMixingIngredients} /> */}

    </Container >
  )
}

export default HomeScreen