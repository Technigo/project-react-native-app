import React, { useState, useEffect } from "react";

import { Firstpage } from "./components/Firstpage";
import { Houses } from "./components/Houses";
import { ShakeEvent } from "./components/ShakeEvent";
import styled from "styled-components/native";

const Background = styled.View`
  flex: 1;
  background-color: #3b2e5a;
  justify-content: center;
  align-items: center;
  border: solid 20px #393b6a;
`;

const App = () => {
  const [firstView, setFirstView] = useState(true);

  const shakePhone = () => {
    setFirstView(false);
  };

  useEffect(() => {
    ShakeEvent.addListener(() => {
      shakePhone();
    });
    return () => {
      ShakeEvent.removeListener();
    };
  }, []);

  return (
    <>
      <Background>
        {firstView ? (
          <Houses />
        ) : (
          <Houses onRestart={() => setFirstView(true)} />
        )}
      </Background>
    </>
  );
};

export default App;