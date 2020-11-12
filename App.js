import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import StartPage from "./components/StartPage";
import QuoteList from "./components/QuoteList";

const Stack = createStackNavigator();

const App = () => {
  return (
    // Allows us to create multiple sites. Each new screen is placed in a stack. 
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name='Start'
          component={StartPage}
          options={{ title: 'Back'}}
        />
        <Stack.Screen
          name='Quotes' component={QuoteList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
