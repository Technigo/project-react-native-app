import React from "react";
import styled from "styled-components/native";

import data from "./data.json";
import { StepCounter } from "./components/StepCounter.js";
import { GainStepsSuggestions } from "./components/GainStepsSuggestions.js";
import { SiteHeader } from "./components/SiteHeader.js";

const WrappingContentContainer = styled.View`
  flex: 1;
  background-color: #29472f;
  justify-content: center;
  align-items: center;
`;

const DateContainer = styled.View`
  margin-top: 40px;
  padding-bottom: 40px;
`;

const DateText = styled.Text`
  font-size: 28px;
  color: #94ed8a;
  text-transform: uppercase;
`;

const App = () => {
  return (
    <WrappingContentContainer>
      <SiteHeader />
      <DateContainer>
        <DateText>
          {" "}
          {new Date().toLocaleDateString("en-En", { weekday: "long" })}
        </DateText>
      </DateContainer>
      <StepCounter />
      <GainStepsSuggestions SuggestionArray={data.SuggestionArray} />
    </WrappingContentContainer>
  );
};

export default App;
