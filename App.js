import React from "react";
import styled from "styled-components/native";

import ShakeApi from "./components/ShakeApi";

const Container = styled.View`
  flex: 1;
  background-color: #305c79;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const App = () => {
  return (
    <Container>
      <ShakeApi />
    </Container>
  );
};

export default App;
