import React from "react";
import styled from "styled-components/native";
import Main from "./components/Main";

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export default App;
