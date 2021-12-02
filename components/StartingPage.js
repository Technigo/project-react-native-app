import React from "react";
import styled, { Text, View } from "styled-components/native";

import CategoryButton from "./CategoryButton";

const Container = styled.View`
  width: 90%;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: "SWFontHollow";
  color: ${(props) => props.theme.colors.textYellow};
`;

const StartingPage = ({ setCurrentPage }) => {
  const onPressed = (category) => {
    setCurrentPage(category);
  };
  return (
    <Container>
      <Title>Hello there! What do you want to know more about?</Title>
      <CategoryButton buttonText="Planets" onPressed={onPressed} />
    </Container>
  );
};

export default StartingPage;
