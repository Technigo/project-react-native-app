import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/HomeScreen"
import RecipeScreen from "./Screens/RecipeScreen"

const Stack = createStackNavigator();

const App = () => {
  const [dishQuery, setDishQuery] = useState({})
  const [ingredientQuery, setIngredientQuery] = useState({ tomato: false, basil: false })
  const [dietQuery, setDietQuery] = useState({})
  const [isMixingIngredients, setIsMixingIngredients] = useState(false)

  const dishes = ["soup", "salad", "pasta", "risotto", "pizza", "curry", "stew", "pie", "wrap"]

  console.log(dishQuery, ingredientQuery, dietQuery)

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home">
          {props => <HomeScreen {...props}
            dishes={dishes}
            dishQuery={dishQuery}
            setDishQuery={setDishQuery}
            ingredientQuery={ingredientQuery}
            setIngredientQuery={setIngredientQuery}
            dietQuery={dietQuery}
            setDietQuery={setDietQuery}
            isMixingIngredients={isMixingIngredients}
            setIsMixingIngredients={setIsMixingIngredients}
          />
          }
        </Stack.Screen>

        <Stack.Screen name="Recipe">
          {props => <RecipeScreen {...props}
            dishQuery={dishQuery}
            ingredientQuery={ingredientQuery}
            dietQuery={dietQuery}
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
