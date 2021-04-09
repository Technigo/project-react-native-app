import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';


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
`

const ChoiceView = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`

const Icon = styled.Image`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`

const Label = styled.Text`
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
const StyledTouchable = styled.TouchableOpacity`  
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 0 10px;
`

const StyledPicker = styled.Picker`
  width: 90%;
  padding: 10px;
  margin: 10px 0 20px;
`

const HomeScreen = ({ navigation, dishes, cuisine, diets, dishQuery, setDishQuery, cuisineQuery, setCuisineQuery, dietQuery, setDietQuery, isMixingIngredients, setIsMixingIngredients }) => {
  const [checkedDish, setCheckedDish] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [checkedDiet, setCheckedDiet] = useState('');

  const handleTap = () => {
    navigation.navigate("Random Recipe")
  }

  const chooseDish = (dish) => {
    setCheckedDish(dish)
    setDishQuery(dish)
  }
  const chooseCuisine = (cuisine) => {
    console.log(cuisine)
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
        <ChoiceView>
          {dishes.map(dish => (
            <StyledTouchable
              key={dish}
              onPress={() => chooseDish(dish)}
            >
              <Icon source={require(`../assets/dishes/${dish}.png`)} alt={dish} />
              <RadioButton
                value={dish}
                status={checkedDish === dish ? 'checked' : 'unchecked'}
                onPress={() => chooseDish(dish)}
              />
            </StyledTouchable>
          ))}
        </ChoiceView>
      </Category>

      <Category>
        <CategoryLabel>Would you like a special cuisine?</CategoryLabel>
        <ChoiceView>
          <StyledPicker
            selectedValue={cuisineQuery}
            onValueChange={(itemValue) => chooseCuisine(itemValue)}
          >
            <Picker.Item
              label="Pick a cuisine!"
              value=""
            />
            {cuisine.map(eachCuisine => (
              <Picker.Item
                key={eachCuisine}
                label={eachCuisine}
                value={eachCuisine} />
            ))}
          </StyledPicker>
        </ChoiceView>
      </Category>

      <Category>
        <CategoryLabel>Any dietary restrictions?</CategoryLabel>
        <ChoiceView>
          {diets.map(diet => (
            <StyledTouchable
              key={diet}
              onPress={() => chooseDish(diet)}
            >
              <Label>{diet}</Label>
              <RadioButton
                key={diet}
                value={diet}
                status={checkedDiet === diet ? 'checked' : 'unchecked'}
                onPress={() => chooseDiet(diet)}
              />
            </StyledTouchable>
          ))}
        </ChoiceView>
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