import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const App = () => {
  return (
    <Container>
      <Title>Hello there</Title>
      <Title>What's your name</Title>
      <Title>💅💅💅</Title>
    </Container>
  );
};

export default App;
