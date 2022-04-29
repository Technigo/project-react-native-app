import React from "react";
import styled from "styled-components/native";
import ShakeApi from "./components/ShakeApi";


const Container = styled.View`
  flex: 1;
  background-color: #1B95D4;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: orange;
  font-weight: 700;
`;

const App = () => {
  return (
    <Container>
      <ShakeApi />
      <Title>Shake shake!</Title>
    </Container>
  );
};

export default App;
