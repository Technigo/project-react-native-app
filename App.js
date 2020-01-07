import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView, RefreshControl } from "react-native";

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin: 20px;
`;

const Food = styled.Image`
  height: 280px;
  width: 280px;
`;

const Container = styled.View`
  margin: 0;
  flex-direction: row;
`;

const Ingredients = styled.View`
  padding: 8px;
  max-width: 250px;
  height: 100%;
`;

const Text = styled.Text`
  color: white;
  font-size: 20px;
  margin: 15px;
`;

const IText = styled.Text`
  color: white;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  margin: 15px;
`;
const Button = styled.TouchableOpacity`
  background: white;
  padding: 10px 20px;
  border-radius: 20;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 900;
`;

const ErrorMsg = styled.Text`
  color: white;
  font-size: 25px;
  margin-top: 50px;
`;

const fetchRecipe = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const json = await res.json();
  // TO REMOVE ALL DESSERT RECIPES
  if (json.meals[0].strCategory === "Dessert") {
    return fetchRecipe();
  } else {
    return json.meals[0];
  }
};

export default function App() {
  const [recipe, setRecipe] = useState(null);
  const { strMeal, strMealThumb, strInstructions } = recipe || {};
  const [refreshing, setRefreshing] = React.useState(false);

  const getRecipe = () => {
    setRefreshing(true);
    fetchRecipe()
      .then(recipeData => {
        setRecipe(recipeData);
        setRefreshing(false);
      })
      .catch(error => {
        // take care of errors
        setRecipe("error");
        setRefreshing(false);
      });
  };

  const handleRefresh = () => {
    getRecipe();
  };

  // FILTER IN INGREDIENTS AND MEASURMENTS
  const isIngredient = mealData => {
    const regex = RegExp(/strIngredient/);
    return regex.test(mealData);
  };

  const isMeasure = mealData => {
    const regex = RegExp(/strMeasure/);
    return regex.test(mealData);
  };

  const isNotEmpty = key => {
    return recipe[key];
  };

  const ingredientKeys =
    recipe &&
    Object.keys(recipe)
      .filter(isIngredient)
      .filter(isNotEmpty);
  const ingredients = ingredientKeys && ingredientKeys.map(key => recipe[key]);
  const measureKeys =
    recipe &&
    Object.keys(recipe)
      .filter(isMeasure)
      .filter(isNotEmpty);
  const measures = measureKeys && measureKeys.map(key => recipe[key]);

  useEffect(() => {
    getRecipe();
  }, []);

  if (!recipe || !ingredients) {
    return null;
  }
  if (recipe === "error") {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <ErrorMsg>{"Something went wrong, try again!"}</ErrorMsg>
      </ScrollView>
    );
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <Wrapper>
        <Title>{strMeal}</Title>
        <Food source={{ uri: strMealThumb }} />
        <Text>{strInstructions}</Text>
        <Container>
          <Ingredients>
            {ingredients.map(ingredient => {
              return <IText>{ingredient}</IText>;
            })}
          </Ingredients>
          <Ingredients>
            {measures.map(measure => {
              return <IText>{measure}</IText>;
            })}
          </Ingredients>
        </Container>
      </Wrapper>
    </ScrollView>
  );
}
