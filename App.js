import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/HomeScreen"
import RecipeScreen from "./Screens/RecipeScreen"
import RecipeDetailsScreen from "./Screens/RecipeDetailsScreen"

const Stack = createStackNavigator();

const App = () => {
  const [dishQuery, setDishQuery] = useState({})
  const [cuisineQuery, setCuisineQuery] = useState({})
  const [dietQuery, setDietQuery] = useState({})
  const [isMixingIngredients, setIsMixingIngredients] = useState(false)
  const [recipeId, setRecipeId] = useState(0)

  const dishes = ["soup", "salad", "pasta", "risotto", "pizza", "curry", "stew", "pie", "wrap", "burger", "fish"]
  const cuisine = ["african", "american", "british", "chinese", "eastern european", "french", "german", "greek", "indian", "italian", "japanese", "jewish", "mediterranean", "mexican", "middle eastern", "nordic", "spanish", "thai"]
  const diets = ["vegetarian", "vegan", "pescetarian", "ketogenic", "gluten-free"]

  console.log(dishQuery, cuisineQuery, dietQuery, recipeId)

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home">
            {props => <HomeScreen {...props}
              dishes={dishes}
              cuisine={cuisine}
              diets={diets}
              dishQuery={dishQuery}
              setDishQuery={setDishQuery}
              cuisineQuery={cuisineQuery}
              setCuisineQuery={setCuisineQuery}
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
              cuisineQuery={cuisineQuery}
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
              cuisineQuery={cuisineQuery}
              dietQuery={dietQuery}
              recipeId={recipeId}
              isMixingIngredients={isMixingIngredients}
              setIsMixingIngredients={setIsMixingIngredients}
            />
            }
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
