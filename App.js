import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quotes } from "./reducers/quotes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home";
import ShakeApi from "./components/ShakeApi";

const reducer = combineReducers({
  quotes: quotes.reducer,
});

const store = configureStore({ reducer });

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Ball" component={ShakeApi} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
