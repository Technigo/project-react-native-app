import React from "react";
import styled from "styled-components/native";
import { GenerateButton } from "./components/generatebutton";
import { Facts } from "./components/facts";
import { Startpage } from "./components/startpage";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const App = () => {
  return (
    <Container>
      <Startpage />
      <Facts />
      {/* <GenerateButton /> */}
    </Container>
  );
};

export default App;
