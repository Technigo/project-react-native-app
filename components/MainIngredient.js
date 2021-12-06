import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { fetchMeals } from '../reducers/meal';
import { meal } from '../reducers/meal';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;
`;
const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const Input = styled.TextInput`
  width: 250px;
  height: 40px;
  border: 1px solid grey;
  padding: 10px;
  background: #fff;
`;

const ButtonWrapper = styled.View`
  width: 250px;
  margin-top: 50px;
  background: #e25e03;
`;

const backImage = {
  uri: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
};

const MainIngredient = ({ navigation }) => {
  const dispatch = useDispatch();
  const ingredient = useSelector((store) => store.meal.mainIngredient);
  const loading = useSelector((store) => store.loader.loading);
  const receivedRecipes = useSelector((store) => store.meal.receivedRecipes);

  const onSetIngredient = (ing) => {
    dispatch(meal.actions.setMainIngredient(ing));
  };

  const submitInput = () => {
    dispatch(fetchMeals());
    receivedRecipes === true && navigation.navigate(`Meals with ${ingredient}`);
  };

  return (
    loading === false && (
      <Container>
        <Background source={backImage} resizeMode="cover">
          <Overlay>
            <Title>What to eat today? </Title>
            <Input
              placeholder="main ingredient"
              clearTextOnFocus
              Value={ingredient}
              onChangeText={(text) => onSetIngredient(text)}
            />

            <ButtonWrapper>
              <Button title="Find recipe" color="#fff" onPress={submitInput} />
            </ButtonWrapper>
          </Overlay>
        </Background>
      </Container>
    )
  );
};

export default MainIngredient;
