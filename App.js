import React from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";

import ButtonApi from "./components/ButtonApi";
import ShakeApi from "./components/ShakeApi";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  return (
    <Container>
      <ButtonApi />
    </Container>
  );
};

export default App;
