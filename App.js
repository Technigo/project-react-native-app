import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import { StepCounter } from "./components/StepCounter";
import { WelcomePage } from "./components/WelcomePage";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Settings } from "./components/Settings";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
`;

const Drawer = createDrawerNavigator();

const App = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [step, setStep] = useState(10000);
  console.log(step);
  const onstepChange = (event) => {
    setStep(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => setShowWelcomePage(false), 1000);
  }, []);

  return (
    <>
      {showWelcomePage ? (
        <Container>
          <WelcomePage />
        </Container>
      ) : (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name="Keep on walking"
              component={StepCounter}
              onstepChange={onstepChange}
              step={step}
            />
            <Drawer.Screen
              name="Settings"
              component={Settings}
              onstepChange={onstepChange}
              setStep={setStep}
              step={step}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
