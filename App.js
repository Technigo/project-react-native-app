import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { settings } from "./reducers/Settings";

import { StepCounter } from "./components/StepCounter";
import { WelcomePage } from "./components/WelcomePage";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Settings } from "./components/Settings";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
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
            <Drawer.Screen
              // component={() => <StepCounter stepData={step} />}
              name="Keep on walking"
              component={StepCounter}
              // onstepChange={onstepChange}
              // step={step}
            />
            <Drawer.Screen
              name="Settings"
              // component={() => <Settings stepData={step} />}
              component={Settings}
              // onstepChange={onstepChange}
              // setStep={setStep}
              // step={step}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  );
};

export default App;
