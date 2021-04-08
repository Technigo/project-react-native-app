import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/HomeScreen"
import RecipeScreen from "./Screens/RecipeScreen"
import RecipeDetailsScreen from "./Screens/RecipeDetailsScreen"

const Stack = createStackNavigator();

const App = () => {
  const [dishQuery, setDishQuery] = useState({})
  const [ingredientQuery, setIngredientQuery] = useState({ tomato: false, basil: false })
  const [dietQuery, setDietQuery] = useState({})
  const [isMixingIngredients, setIsMixingIngredients] = useState(false)
  const [recipeId, setRecipeId] = useState(0)

  const dishes = ["soup", "salad", "pasta", "risotto", "pizza", "curry", "stew", "pie", "wrap"]
  const ingredients = ["tomato", "cheese", "eggs", "beef", "chicken", "corn", "lamb", "pork", "basil", "potato"]
  const diets = ["vegetarian", "vegan", "pescetarian", "ketogenic", "gluten-free"]

  console.log(dishQuery, ingredientQuery, dietQuery, recipeId)

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home">
          {props => <HomeScreen {...props}
            dishes={dishes}
            ingredients={ingredients}
            diets={diets}
            dishQuery={dishQuery}
            setDishQuery={setDishQuery}
            ingredientQuery={ingredientQuery} s
            setIngredientQuery={setIngredientQuery}
            dietQuery={dietQuery}
            setDietQuery={setDietQuery}
            isMixingIngredients={isMixingIngredients}
            setIsMixingIngredients={setIsMixingIngredients}
          />
          }
        </Stack.Screen>

        <Stack.Screen name="Random Recipe">
          {props => <RecipeScreen {...props}
            dishQuery={dishQuery}
            ingredientQuery={ingredientQuery}
            dietQuery={dietQuery}
            setRecipeId={setRecipeId}
            isMixingIngredients={isMixingIngredients}
            setIsMixingIngredients={setIsMixingIngredients}
          />
          }
        </Stack.Screen>

        <Stack.Screen name="Recipe Details">
          {props => <RecipeDetailsScreen {...props}
            dishQuery={dishQuery}
            ingredientQuery={ingredientQuery}
            dietQuery={dietQuery}
            recipeId={recipeId}
            isMixingIngredients={isMixingIngredients}
            setIsMixingIngredients={setIsMixingIngredients}
          />
          }
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
