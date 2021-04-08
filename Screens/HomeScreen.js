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

const Container = styled.ScrollView`
  flex: 1;
`

const ChoiceView = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  flex-direction: row;
  flex-wrap: wrap;
`
const DishView = styled(ChoiceView)`
  
`
const CuisineView = styled(ChoiceView)`
  
`
const DietView = styled(ChoiceView)`
`

const Icon = styled.Image`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`

const Label = styled.Text`
`

const StyledTouchable = styled.TouchableOpacity`  
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 0 10px;
`

const StyledPicker = styled.Picker`
  width: 100%;
  padding: 10px;
`

const HomeScreen = ({ navigation, dishes, cuisine, diets, dishQuery, setDishQuery, cuisineQuery, setCuisineQuery, dietQuery, setDietQuery, isMixingIngredients, setIsMixingIngredients }) => {
  const [checkedDish, setCheckedDish] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [checkedDiet, setCheckedDiet] = useState('');

  const handleClick = () => {
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

      <DishView>
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
      </DishView>

      <CuisineView>
        <StyledPicker
          selectedValue={cuisineQuery}
          onValueChange={(itemValue) => chooseCuisine(itemValue)}
        >
          {cuisine.map(eachCuisine => (
            <Picker.Item
              key={eachCuisine}
              label={eachCuisine}
              value={eachCuisine} />
          ))}
        </StyledPicker>
      </CuisineView>

      <DietView>
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