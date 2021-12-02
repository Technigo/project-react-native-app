import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { settings } from "./reducers/Settings";

import { StepCounter } from "./components/StepCounter";
import { WelcomePage } from "./components/WelcomePage";
import { About } from "./components/About";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingsPage } from "./components/SettingsPage";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  padding: 15px;
`;
const reducer = combineReducers({ settings: settings.reducer });
const store = configureStore({ reducer });

const Drawer = createDrawerNavigator();

const App = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  // console.log(step);
  // const onstepChange = (event) => {
  //   setStep(event.target.value);
  // };

  useEffect(() => {
    setTimeout(() => setShowWelcomePage(false), 1000);
  }, []);

  return (
    <Provider store={store}>
      {showWelcomePage ? (
        <Container>
          <WelcomePage />
        </Container>
      ) : (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Keep on walking" component={StepCounter} />
            <Drawer.Screen name="Settings" component={SettingsPage} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  );
};

export default App;
