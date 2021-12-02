import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paintings from "./reducers/paintings";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./components/Home";
import MoreInfo from "./components/MoreInfo";

const Drawer = createDrawerNavigator();

const App = () => {
  const reducer = combineReducers({
    paintings: paintings.reducer,
  });

  const store = configureStore({ reducer });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="More info" component={MoreInfo} />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
