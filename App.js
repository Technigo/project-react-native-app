import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/HomeScreen"
import RecipeScreen from "./Screens/RecipeScreen"
import RecipeDetailsScreen from "./Screens/RecipeDetailsScreen"
import icons from "./utils/icons"

const Stack = createStackNavigator();

const App = () => {
  const [dishQuery, setDishQuery] = useState("")
  const [cuisineQuery, setCuisineQuery] = useState("")
  const [dietQuery, setDietQuery] = useState("")
  const [isMixingIngredients, setIsMixingIngredients] = useState(false)
  const [recipeId, setRecipeId] = useState(0)


  const dishes = [
    { name: "bbq", icon: icons.bbq },
    { name: "cake", icon: icons.cake },
    { name: "pancake", icon: icons.pancake },
    { name: "pasta", icon: icons.pasta },
    { name: "pizza", icon: icons.pizza },
    { name: "rice", icon: icons.rice },
    { name: "salad", icon: icons.salad },
    { name: "sandwich", icon: icons.sandwich },
    { name: "smoothie", icon: icons.smoothie },
    { name: "soup", icon: icons.soup },
    { name: "stew", icon: icons.stew },
    { name: "taco", icon: icons.taco }
  ]

  const cuisine = ["African", "American", "Chinese", "Eastern European", "French", "German", "Greek", "Indian", "Italian", "Japanese", "Jewish", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Spanish", "Thai"]

  const diets = ["Vegetarian", "Vegan", "Pescetarian", "Ketogenic", "Gluten-free", "Lacto-Vegetarian", "Ovo-Vegetarian"]

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

          <Stack.Screen name="Recipe Suggestions">
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
