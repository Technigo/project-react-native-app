import { createSlice } from '@reduxjs/toolkit';
import { loader } from './loader';

export const meal = createSlice({
  name: 'meal',
  initialState: {
    mainIngredient: null,
    recipes: [],
    receivedRecipes: false,
    recipeDetail: [],
  },
  reducers: {
    setMainIngredient: (store, action) => {
      store.mainIngredient = action.payload;
    },
    setRecipes: (store, action) => {
      store.recipes = action.payload;
    },

    setReceivedRecipes: (store, action) => {
      store.receivedRecipes = action.payload;
    },

    setRecipeDetail: (store, action) => {
      store.recipeDetail = action.payload;
    },
  },
});

export const fetchMeals = () => {
  return (dispatch, getState) => {
    const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${
      getState().meal.mainIngredient
    }`;
    dispatch(loader.actions.setLoading(true));
    dispatch(meal.actions.setReceivedRecipes(false));
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(meal.actions.setRecipes(json));
      })
      .finally(() => {
        dispatch(meal.actions.setReceivedRecipes(true));
        dispatch(loader.actions.setLoading(false));
      });
  };
};

export const fetchDetail = (id) => {
  const API_URL_Detail = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  return (dispatch) => {
    dispatch(loader.actions.setLoading(true));
    fetch(API_URL_Detail)
      .then((res) => res.json())
      .then((json) => {
        dispatch(meal.actions.setRecipeDetail(json));
      })
      .finally(() => {
        dispatch(loader.actions.setLoading(false));
      });
  };
};
