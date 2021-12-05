import React from "react";
import styled from "styled-components/native";
import ShakeApi from "./components/ShakeApi";

const Container = styled.View`
  margin: auto;
  width: 100%;
  flex: 1;
  background-color: #ded4c3;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <ShakeApi />
    </Container>
  );
};

export default App;
