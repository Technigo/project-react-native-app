import React from "react";
import styled from "styled-components/native";

import Compass from "./components/Compass";

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
      <Compass />
    </Container>
  );
};

export default App;
