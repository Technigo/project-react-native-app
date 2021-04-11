import React from "react";
import styled from "styled-components/native";

import { SensorComponent } from "./components/SensorComponent";
import { Icon } from "./components/Icon";


const Container = styled.View`
  flex: 1;
  background-color: #B7E3FF;
  margin: 0;
`;

const HeadingContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;

`;

const Title = styled.Text`
  margin-top: 75px;
  font-size: 36px;
  font-weight: bold;
  color: #1B3359;
`;

const App = () => {
  return (
    <Container>
      <HeadingContainer>
        <Title>MAGIC EIGHT</Title>
        <Icon />
      </HeadingContainer>
      <SensorComponent />
    </Container>
  );
};

export default App;
