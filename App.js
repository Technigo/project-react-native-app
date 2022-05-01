import React from "react";
import styled from "styled-components/native";

import Main from "./components/Main";
const Container = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default App;
