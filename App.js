import React from "react";
import styled from "styled-components/native";
import Ball from "./components/Ball";

const Container = styled.View`
  flex: 1;
  background-color: #f2f939;
  align-items: center;
`;

const Title = styled.Text`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 900;
`;

const App = () => {
  return (
    <Container>
      <Title>Here you can find the answer on everything!</Title>
      <Ball />
    </Container>
  );
};

export default App;
