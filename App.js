import React from "react";
import styled from "styled-components/native";

import HomeScreen from "./components/HomeScreen";
const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <HomeScreen />
    </Container>
  );
};

export default App;
