import React from "react";
import styled from "styled-components/native";

import CategoryButton from "./CategoryButton";

const Title = styled.Text`
  font-size: 24px;
  font-family: "SWFontHollow";
  color: ${(props) => props.theme.colors.textYellow};
  text-align: center;
`;

const SmallContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartingPage = ({ setCurrentPage }) => {
  const onPressed = (category) => {
    setCurrentPage(category);
  };
  return (
    <>
      <Title>Hello there! What do you want to know more about?</Title>
      <SmallContainer>
        <CategoryButton buttonText="Planets" onPressed={onPressed} />
      </SmallContainer>
    </>
  );
};

export default StartingPage;
