import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import { StepCounter } from "./components/StepCounter";
import { WelcomePage } from "./components/WelcomePage";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
`;

const App = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowWelcomePage(false), 1000);
  }, []);
  return (
    <Container>{showWelcomePage ? <WelcomePage /> : <StepCounter />}</Container>
  );
};

export default App;
