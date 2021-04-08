import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { RadioButton } from 'react-native-paper';

import { SensorComponent } from '../components/SensorComponent';
import Dish from "../components/Dish"
import Cuisine from '../components/Cuisine';
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
const CuisineView = styled(ChoiceView)`
  
`
const DietView = styled(ChoiceView)`
  flex-direction: row;
`

const HomeScreen = ({ navigation, dishes, cuisine, diets, dishQuery, setDishQuery, cuisineQuery, setCuisineQuery, dietQuery, setDietQuery, isMixingIngredients, setIsMixingIngredients }) => {
  const [checkedDish, setCheckedDish] = useState('');
  const [checkedCuisine, setCheckedCuisine] = useState('');
  const [checkedDiet, setCheckedDiet] = useState('');

  const handleClick = () => {
    navigation.navigate("Random Recipe")
  }
  console.log(dishQuery)
  const chooseDish = (dish) => {
    setCheckedDish(dish)
    setDishQuery(dish)
  }
  const chooseCuisine = (cuisine) => {
    setCheckedCuisine(cuisine)
    setCuisineQuery(cuisine)
  }
  const chooseDiet = (diet) => {
    setCheckedDiet(diet)
    setDietQuery(diet)
  }

  return (
    <Container>

      <DishView>
        {dishes.map(dish => (
          <TouchableOpacity
            key={dish}
            onPress={() => chooseDish(dish)}
          >
            <Text>{dish}</Text>
            <RadioButton
              value={dish}
              status={checkedDish === dish ? 'checked' : 'unchecked'}
              onPress={() => chooseDish(dish)}
            />
          </TouchableOpacity>
        ))}
      </DishView>

      <CuisineView>
        {cuisine.map(eachCuisine => (
          <TouchableOpacity
            key={eachCuisine}
            onPress={() => chooseDish(eachCuisine)}
          >
            <Text>{eachCuisine}</Text>
            <RadioButton
              key={eachCuisine}
              value={eachCuisine}
              status={checkedCuisine === eachCuisine ? 'checked' : 'unchecked'}
              onPress={() => chooseCuisine(eachCuisine)}
            />
          </TouchableOpacity>
        ))}
      </CuisineView>

      <DietView>
        {diets.map(diet => (
          <TouchableOpacity
            key={diet}
            onPress={() => chooseDish(diet)}
          >
            <Text>{diet}</Text>
            <RadioButton
              key={diet}
              value={diet}
              status={checkedDiet === diet ? 'checked' : 'unchecked'}
              onPress={() => chooseDiet(diet)}
            />
          </TouchableOpacity>
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