import React from "react";
import styled from "styled-components/native";

import ShakeApi from "./components/ShakeApi";
import ShareFox from "./components/ShareFox";

const MainSection = styled.View`
  height: 100%;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <MainSection>
      <ShakeApi />
      <ShareFox />
    </MainSection>
  );
};

export default App;
