import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { RadioButton } from 'react-native-paper';


import { SensorComponent } from '../components/SensorComponent';
import Dish from "../components/Dish"
import Cuisine from '../components/Cuisine';
import Diet from "../components/Diet"
import { ICON_PATH } from "../utils/urls";

import bbq from "../assets/dishes/bbq.png"
import cake from "../assets/dishes/cake.png"
import pancake from "../assets/dishes/pancake.png"
import pasta from "../assets/dishes/pasta.png"
import pizza from "../assets/dishes/pizza.png"
import rice from "../assets/dishes/rice.png"
import salad from "../assets/dishes/salad.png"
import sandwich from "../assets/dishes/sandwich.png"
import smoothie from "../assets/dishes/smoothie.png"
import soup from "../assets/dishes/soup.png"
import stew from "../assets/dishes/stew.png"
import taco from "../assets/dishes/taco.png"

const Container = styled.ScrollView`
  flex: 1;
`

const Category = styled.View`
  padding: 10px;  
`

const SubmitText = styled.Text`
  font-weight: 700;
  font-size: 20px;  
`

const CategoryLabel = styled.Text`
  font-size: 20px;
  margin: 5px 10px;
`

const SubmitTouchable = styled.TouchableOpacity`
  margin: 20px 0;
  padding: 10px 30px;
  background-color: #ff5447;
  align-self: center;
  border-radius: 20px;
`

const HomeScreen = ({ navigation, dishes, cuisine, diets, setDishQuery, cuisineQuery, setCuisineQuery, setDietQuery }) => {
  const [checkedDish, setCheckedDish] = useState('');
  const [checkedDiet, setCheckedDiet] = useState('');

  const handleTap = () => {
    navigation.navigate("Random Recipe")
  }

  const chooseDish = (dish) => {
    setCheckedDish(dish)
    setDishQuery(dish)
  }
  const chooseCuisine = (cuisine) => {
    setCuisineQuery(cuisine)
  }
  const chooseDiet = (diet) => {
    setCheckedDiet(diet)
    setDietQuery(diet)
  }

  return (
    <Container>
      <Category>
        <CategoryLabel>What kind of dish would you like?</CategoryLabel>
        <Dish
          dishes={dishes}
          chooseDish={chooseDish}
          checkedDish={checkedDish}
        />
      </Category>

      <Category>
        <CategoryLabel>Would you like a special cuisine?</CategoryLabel>
        <Cuisine
          cuisine={cuisine}
          cuisineQuery={cuisineQuery}
          chooseCuisine={chooseCuisine}
        />
      </Category>

      <Category>
        <CategoryLabel>Any dietary restrictions?</CategoryLabel>
        <Diet
          diets={diets}
          chooseDiet={chooseDiet}
          checkedDiet={checkedDiet}
        />
      </Category>

      <SubmitTouchable onPress={handleTap}>
        <SubmitText>
          Tap to get recipe
        </SubmitText>
      </SubmitTouchable>

    </Container >
  )
}

export default HomeScreen