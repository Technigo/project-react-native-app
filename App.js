import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity, View } from "react-native"
import { SensorComponent } from './components/SensorComponent';
import Ingredient from './components/Ingredient';
import Diet from "./components/Diet"
import Recipe from './components/Recipe';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;


const App = () => {
  const [ingredientQuery, setIngredientQuery] = useState({ tomato: false, basil: false })
  const [dietQuery, setDietQuery] = useState({})
  const [isMixingIngredients, setIsMixingIngredients] = useState(false)

  console.log(ingredientQuery, dietQuery)

  return (
    <Container>
      <View>
        {/* <SensorComponent setIsMixingIngredients={setIsMixingIngredients} /> */}
        <Ingredient ingredient="tomato" ingredientQuery={ingredientQuery} setIngredientQuery={setIngredientQuery} />
        <Ingredient ingredient="basil" ingredientQuery={ingredientQuery} setIngredientQuery={setIngredientQuery} />
        <Diet label="vegetarian" dietQuery={dietQuery} setDietQuery={setDietQuery} />
      </View>
      <TouchableOpacity onPress={() => { setIsMixingIngredients(true) }}>
        <Text>
          Click to mix ingredients
        </Text>
      </TouchableOpacity>
      {isMixingIngredients && <Recipe ingredientQuery={ingredientQuery} dietQuery={dietQuery} isMixingIngredients setIsMixingIngredients={setIsMixingIngredients} />}

      {/* {!isMixingIngredients && <View>
        <SensorComponent setIsMixingIngredients={setIsMixingIngredients} />
        <Ingredient ingredient="rice" ingredientQuery={ingredientQuery} setIngredientQuery={setIngredientQuery} />
        <Ingredient ingredient="beans" ingredientQuery={ingredientQuery} setIngredientQuery={setIngredientQuery} />
        <Diet label="dairy" dietQuery={dietQuery} />
      </View>}
      {isMixingIngredients && <Recipe ingredientQuery={ingredientQuery} />} */}
    </Container>
  );
};

export default App;
