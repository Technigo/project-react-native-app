import React from "react";
import styled from "styled-components/native";
import { SensorComponent } from "./components/SensorComponent";

const Container = styled.View`
  flex: 1;
  background-color: white;
  margin: 0;
`;

const HeadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: black;
`;

const SensorContainer = styled.View`
  flex: 2;
  background-color: gray;
`;

const App = () => {
  return (
    <Container>
      <HeadingContainer>
        <Title>Magic 8 ball</Title>
      </HeadingContainer>
      {/* add image here? */}
      <SensorContainer>
        <SensorComponent />
      </SensorContainer>
    </Container>
  );
};

export default App;
