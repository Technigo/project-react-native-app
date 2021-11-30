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

const Text = styled.Text`
  font-size: 25px;
`;

export default App;
