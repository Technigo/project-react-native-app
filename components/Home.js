import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { TouchableOpacity, ScrollView } from 'react-native';
import { fetchDetail } from '../reducers/meal';
import { meal } from '../reducers/meal';
import { Linking } from 'react-native';

const Container = styled.View`
  border: 15px solid black;
`;
const Picture = styled.Image`
  width: 100%;
  height: 400px;
`;
const Title = styled.Text`
  color: white;
  text-align: center;
  background: black;
`;

const Home = () => {
  const mealOptions = useSelector((store) => store.meal.recipes.meals);
  const mainIngredient = useSelector((store) => store.meal.mainIngredient);
  const recipeDetail = useSelector((store) => store.meal.recipeDetail.meals);
  const dispatch = useDispatch();

  const handelRecipeLink = (id) => {
    dispatch(fetchDetail(id));

    if (recipeDetail) {
      console.log('test', recipeDetail);
      recipeDetail.map((item) => {
        Linking.openURL(item.strYoutube);
      });
    }
  };

  return (
    <>
      {mealOptions !== null ? (
        <ScrollView>
          {mealOptions.map((item) => {
            return (
              <Container key={item.idMeal}>
                <Picture source={{ uri: item.strMealThumb }} />
                <TouchableOpacity onPress={() => handelRecipeLink(item.idMeal)}>
                  <Title>{item.strMeal}</Title>
                </TouchableOpacity>
              </Container>
            );
          })}
        </ScrollView>
      ) : (
        <Title>No meal found with {mainIngredient} </Title>
      )}
    </>
  );
};

export default Home;
