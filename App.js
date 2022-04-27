import React from "react";
import styled from "styled-components/native";
import Main from "./components/Main";

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default App;